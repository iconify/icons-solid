import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_vg3tb-o.css';
import '../../css/w/w8xuifbli.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p_vg3tb-o"/><path class="w8xuifbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bloch-sphere"} {...others} />);
}

export default Component;
