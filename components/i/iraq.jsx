import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/n/ndsoh9bgy.css';
import '../../css/k/k1usvwtey.css';
import '../../css/k/k7y_74pjq.css';
import '../../css/h/hdcj5fbao.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="ndsoh9bgy"/><path class="k1usvwtey"/><path class="k7y_74pjq"/><path class="hdcj5fbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:iraq"} {...others} />);
}

export default Component;
