import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5jjfybut.css';
import '../../css/e/e4bx47bfd.css';
import '../../css/y/ynrit7bho.css';
import '../../css/h/he4uom_bw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hi0zvobqa.css';
import '../../css/w/wh1vmrejd.css';
import '../../css/z/z8dkxlbkb.css';
import '../../css/b/b9o8l5bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5jjfybut"/><path class="e4bx47bfd"/><path class="ynrit7bho"/><path class="he4uom_bw"/><g class="xtpeb-edw"><path class="hi0zvobqa"/><path class="wh1vmrejd"/><path class="z8dkxlbkb"/><path class="b9o8l5bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-bold-duotone"} {...others} />);
}

export default Component;
