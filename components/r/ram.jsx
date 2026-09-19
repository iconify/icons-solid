import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xemdinble.css';
import '../../css/h/hj5nmbbbk.css';
import '../../css/k/k-0qe8evz.css';
import '../../css/o/ot7sdib_g.css';
import '../../css/g/g91lz69rw.css';
import '../../css/l/lvmme0b8b.css';
import '../../css/d/dr81tqbmj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xemdinble"/><path class="hj5nmbbbk"/><path class="k-0qe8evz"/><path class="ot7sdib_g"/><path class="g91lz69rw"/><path class="lvmme0b8b"/><path class="dr81tqbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ram"} {...others} />);
}

export default Component;
