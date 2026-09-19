import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jka2iz_-u.css';
import '../../css/j/j6g153wwq.css';
import '../../css/l/l0vjopbdv.css';
import '../../css/c/c3v7qfbtf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jka2iz_-u"/><path class="j6g153wwq"/><path class="l0vjopbdv"/><path class="c3v7qfbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cash-coin"} {...others} />);
}

export default Component;
