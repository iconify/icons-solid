import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfb26sb-e.css';
import '../../css/d/d1x_6zbkv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jfb26sb-e"/><path class="d1x_6zbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:austria"} {...others} />);
}

export default Component;
