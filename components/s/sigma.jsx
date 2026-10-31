import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upezbjbur.css';
import '../../css/i/i1h5cac9h.css';
import '../../css/p/p9qsivopf.css';
import '../../css/y/y4-o26bfb.css';
import '../../css/i/ihlb1mber.css';
import '../../css/r/rpret94oi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="upezbjbur wm-shadow"/><path class="i1h5cac9h wm-k"/><path class="p9qsivopf wm-k"/><path class="wm-k y4-o26bfb"/><path class="ihlb1mber wm-k"/><path class="rpret94oi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:sigma"} {...others} />);
}

export default Component;
