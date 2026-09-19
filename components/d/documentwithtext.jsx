import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m35bpgbdz.css';
import '../../css/h/hywj0nnlp.css';
import '../../css/u/uzaovqzzs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m35bpgbdz"/><path class="hywj0nnlp"/><path class="uzaovqzzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:documentwithtext"} {...others} />);
}

export default Component;
