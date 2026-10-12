import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovu4icjzb.css';
import '../../css/v/vk_vtrrnl.css';
import '../../css/p/poade0yht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovu4icjzb"/><path clip-rule="evenodd" class="vk_vtrrnl"/><path class="poade0yht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:videotape-filled"} {...others} />);
}

export default Component;
