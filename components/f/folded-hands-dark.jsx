import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7vdaacdg.css';
import '../../css/n/n1opf8b0g.css';
import '../../css/m/mt7jsbbft.css';
import '../../css/k/khh6tltyu.css';
import '../../css/o/ozvmypy9e.css';
import '../../css/r/r49gwqbqh.css';
import '../../css/l/l8pu2sbyf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p7vdaacdg"/><path class="n1opf8b0g"/><path clip-rule="evenodd" class="mt7jsbbft"/><path class="khh6tltyu"/><path clip-rule="evenodd" class="ozvmypy9e"/><path clip-rule="evenodd" class="r49gwqbqh"/><path class="l8pu2sbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:folded-hands-dark"} {...others} />);
}

export default Component;
