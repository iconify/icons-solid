import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q2ic2ib6r.css';
import '../../css/a/a7hbc4b1f.css';
import '../../css/i/infedybtq.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="q2ic2ib6r"/><g transform="translate(5 1)"><ellipse class="a7hbc4b1f"/><path class="infedybtq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:elevator-up"} {...others} />);
}

export default Component;
