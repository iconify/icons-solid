import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-briy-mv.css';
import '../../css/q/qhogk5bhw.css';
import '../../css/g/gyvacpo7m.css';
import '../../css/h/ht9sxy1wk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g-briy-mv"/><path class="qhogk5bhw"/><path class="gyvacpo7m"/><path class="ht9sxy1wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tachometer-5"} {...others} />);
}

export default Component;
