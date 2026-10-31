import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv__ntbgi.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/m/m3x6dbb0h.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="hv__ntbgi"/><path class="d1x_6zbkv"/><path class="m3x6dbb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:honduras"} {...others} />);
}

export default Component;
