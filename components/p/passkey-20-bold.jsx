import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsi2vccmn.css';
import '../../css/f/fjxpc8spu.css';
import '../../css/r/re2dj7mko.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bsi2vccmn"/><path class="fjxpc8spu"/><path class="re2dj7mko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:passkey-20-bold"} {...others} />);
}

export default Component;
