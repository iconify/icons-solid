import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mniji4bqm.css';
import '../../css/f/f-lkdvbsq.css';
import '../../css/p/pp8fnwd4k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mniji4bqm"/><path class="f-lkdvbsq"/><path clip-rule="evenodd" class="pp8fnwd4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:moon"} {...others} />);
}

export default Component;
