import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fr9swbb_n.css';
import '../../css/k/kseq5bp-d.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fr9swbb_n"/><path class="kseq5bp-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:mark-snorker"} {...others} />);
}

export default Component;
