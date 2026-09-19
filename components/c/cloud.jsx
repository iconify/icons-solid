import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt5bmx3ap.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zt5bmx3ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:cloud"} {...others} />);
}

export default Component;
