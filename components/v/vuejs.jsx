import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw_djzbhe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bw_djzbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:vuejs"} {...others} />);
}

export default Component;
