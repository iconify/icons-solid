import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4gp8bbtg.css';
import '../../css/i/iwyv0ebdx.css';
import '../../css/r/rmfj2xbwu.css';
import '../../css/u/u-ih4kbbd.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="o4gp8bbtg"/><path class="iwyv0ebdx"/><path class="rmfj2xbwu"/><g transform="translate(320 256.9)scale(176.87999)"><path id="SVGQN7gneJU" class="u-ih4kbbd"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(-144)"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(-72)"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(72)"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(144)"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mm-4x3"} {...others} />);
}

export default Component;
