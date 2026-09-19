import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk9tnbfio.css';
import '../../css/x/xphc7fb2u.css';
import '../../css/r/rod3izbjm.css';
import '../../css/h/hjg2nm81k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qk9tnbfio"/><path clip-rule="evenodd" class="xphc7fb2u"/><path clip-rule="evenodd" class="rod3izbjm"/><path class="hjg2nm81k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bell-ring"} {...others} />);
}

export default Component;
