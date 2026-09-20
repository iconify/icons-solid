import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ex8terbtf.css';
import '../../css/j/j5hs9_bth.css';
import '../../css/k/k7pxxab3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ex8terbtf"/><circle class="j5hs9_bth"/><path class="k7pxxab3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pizza-slice-filled"} {...others} />);
}

export default Component;
