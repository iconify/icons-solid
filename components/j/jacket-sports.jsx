import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pkwnxxbuy.css';
import '../../css/a/avkwxrbxi.css';
import '../../css/m/ml553kega.css';
import '../../css/c/c7xg1sbmj.css';
import '../../css/i/irck0rbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pkwnxxbuy"/><path class="avkwxrbxi"/><path class="ml553kega"/><path class="c7xg1sbmj"/><path class="irck0rbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:jacket-sports"} {...others} />);
}

export default Component;
