import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5pxry.css';
import '../../css/w/w12haa.css';
import '../../css/o/oxx-om.css';
import '../../css/x/x1bqbh.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGlMnmjcIA"><path class="t5pxry w12haa"/><path class="oxx-om t5pxry x1bqbh"/></mask></defs><path mask="url(#SVGlMnmjcIA)" class="botfzx"/><path class="gd_4-q t5pxry x1bqbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-simple-off-filled"} {...others} />);
}

export default Component;
