import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwl6exbop.css';
import '../../css/b/bek0opceb.css';
import '../../css/c/c_mcfcc1w.css';
import '../../css/l/le0twoqov.css';
import '../../css/l/l21exiblj.css';
import '../../css/g/gh__o-bme.css';
import '../../css/g/gdcd3_wfz.css';
import '../../css/b/blmekobnf.css';
import '../../css/v/vsnicjp-w.css';
import '../../css/h/hjypzed1w.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wwl6exbop"/><path class="bek0opceb"/><path class="c_mcfcc1w"/><path class="le0twoqov"/><path class="l21exiblj"/><path class="gh__o-bme"/><path class="gdcd3_wfz"/><path class="blmekobnf"/><path class="vsnicjp-w"/><path class="hjypzed1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:lasagna"} {...others} />);
}

export default Component;
