import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl5lsw3qs.css';
import '../../css/z/zzcp-vb2m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cl5lsw3qs"/><path class="zzcp-vb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ticket"} {...others} />);
}

export default Component;
