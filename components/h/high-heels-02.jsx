import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ivlmmabox.css';
import '../../css/v/vkzli6vno.css';
import '../../css/t/txydjqbax.css';
import '../../css/z/z_9nnjbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ivlmmabox"/><path class="vkzli6vno"/><path class="txydjqbax"/><path class="z_9nnjbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:high-heels-02"} {...others} />);
}

export default Component;
