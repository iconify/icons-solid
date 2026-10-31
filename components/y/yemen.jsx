import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/d/dz--kkbng.css';
import '../../css/n/ndsoh9bgy.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="dz--kkbng"/><path class="ndsoh9bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:yemen"} {...others} />);
}

export default Component;
