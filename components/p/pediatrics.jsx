import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vukvxzvmz.css';
import '../../css/f/fyt8axbtm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vukvxzvmz"/><path class="fyt8axbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:pediatrics"} {...others} />);
}

export default Component;
