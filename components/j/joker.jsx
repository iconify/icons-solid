import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpc9vqboe.css';
import '../../css/y/yuye_93fh.css';
import '../../css/x/x-9fnkbnf.css';
import '../../css/t/tdnc6cbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kpc9vqboe"/><path class="yuye_93fh"/><path class="x-9fnkbnf"/><path class="tdnc6cbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:joker"} {...others} />);
}

export default Component;
