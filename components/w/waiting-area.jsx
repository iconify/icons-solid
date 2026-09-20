import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9a21gb4v.css';
import '../../css/y/y5y8shbyt.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="w9a21gb4v"/><path class="y5y8shbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:waiting-area"} {...others} />);
}

export default Component;
