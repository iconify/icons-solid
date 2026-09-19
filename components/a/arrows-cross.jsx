import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd1zh49aw.css';
import '../../css/f/fk3mf7bqi.css';
import '../../css/r/ru_17e40o.css';
import '../../css/c/c04ryybwl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yd1zh49aw"/><path class="fk3mf7bqi"/><path class="ru_17e40o"/><path class="c04ryybwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrows-cross"} {...others} />);
}

export default Component;
