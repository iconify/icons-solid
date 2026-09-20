import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp8jkl.css';
import '../../css/i/i7fxbk.css';
import '../../css/j/j-yyay.css';
import '../../css/g/glymdo.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-52.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGzW4qcc1a"><path class="xp8jkl"/><circle class="i7fxbk j-yyay"/><circle class="glymdo i7fxbk"/></mask></defs><path mask="url(#SVGzW4qcc1a)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:pizza-filled"} {...others} />);
}

export default Component;
