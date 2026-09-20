import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_i8jw1ir.css';
import '../../css/s/sofd7-cvt.css';
import '../../css/f/f-6vddcqw.css';
import '../../css/u/umja_oiqp.css';
import '../../css/i/i7gj3bbuw.css';
import '../../css/r/rfmaqoawg.css';
import '../../css/z/ziiwjx16h.css';
import '../../css/w/wtrq84g7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_i8jw1ir"/><path class="sofd7-cvt"/><path class="f-6vddcqw"/><path class="umja_oiqp"/><path class="i7gj3bbuw"/><path class="rfmaqoawg"/><path class="ziiwjx16h"/><path class="wtrq84g7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:linux"} {...others} />);
}

export default Component;
