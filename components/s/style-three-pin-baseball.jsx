import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx-xz6bun.css';
import '../../css/j/jdqbwqbkq.css';
import '../../css/i/in_62xpix.css';
import '../../css/d/d10ueobel.css';
import '../../css/p/pv372ebij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zx-xz6bun"/><path class="jdqbwqbkq"/><path class="in_62xpix"/><path class="d10ueobel"/><path class="pv372ebij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-three-pin-baseball"} {...others} />);
}

export default Component;
