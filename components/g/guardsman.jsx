import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ursflib0p.css';
import '../../css/b/b8-581b4d.css';
import '../../css/d/dw82cab9l.css';
import '../../css/y/ya36t3jpk.css';
import '../../css/e/exaty62xg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ursflib0p"/><path class="b8-581b4d"/><path class="dw82cab9l"/><path class="ya36t3jpk"/><path class="exaty62xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:guardsman"} {...others} />);
}

export default Component;
