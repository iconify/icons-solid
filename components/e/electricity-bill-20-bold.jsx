import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8_piicxj.css';
import '../../css/n/nvkdiwbyk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u8_piicxj"/><path class="nvkdiwbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electricity-bill-20-bold"} {...others} />);
}

export default Component;
