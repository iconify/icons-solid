import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu5d3vb7i.css';
import '../../css/b/bp_65ywhg.css';
import '../../css/u/uxrthobgk.css';
import '../../css/c/cx-3tnvsf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="iu5d3vb7i"/><path class="bp_65ywhg"/><path class="uxrthobgk"/><path class="cx-3tnvsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:inbox"} {...others} />);
}

export default Component;
