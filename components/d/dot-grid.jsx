import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zozaj1o1q.css';
import '../../css/t/tatgggbkl.css';
import '../../css/f/f9n1_gblu.css';
import '../../css/j/jp89slbwl.css';
import '../../css/j/jxl67pbry.css';
import '../../css/c/cgwv8rv8i.css';
import '../../css/o/oxaibyp_q.css';
import '../../css/z/z5gbzwbta.css';
import '../../css/j/jlk_h7bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle transform="rotate(90 4 4)" class="zozaj1o1q"/><circle transform="rotate(90 12 4)" class="tatgggbkl"/><circle transform="rotate(90 20 4)" class="f9n1_gblu"/><circle transform="rotate(90 4 12)" class="jp89slbwl"/><circle transform="rotate(90 12 12)" class="jxl67pbry"/><circle transform="rotate(90 20 12)" class="cgwv8rv8i"/><circle transform="rotate(90 4 20)" class="oxaibyp_q"/><circle transform="rotate(90 12 20)" class="z5gbzwbta"/><circle transform="rotate(90 20 20)" class="jlk_h7bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:dot-grid"} {...others} />);
}

export default Component;
