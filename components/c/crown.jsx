import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/esdej9bpk.css';
import '../../css/u/u172-o03c.css';
import '../../css/c/c8os-7gcx.css';
import '../../css/w/wayfa-stq.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><path class="esdej9bpk"/><circle class="u172-o03c"/><circle class="c8os-7gcx"/><ellipse class="wayfa-stq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:crown"} {...others} />);
}

export default Component;
