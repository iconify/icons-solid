import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdatwkffh.css';
import '../../css/u/ux686dk8x.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bdatwkffh"/><path class="ux686dk8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-pharmacy"} {...others} />);
}

export default Component;
