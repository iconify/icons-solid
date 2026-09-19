import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k375yqbsu.css';
import '../../css/h/hwrr_1buw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="k375yqbsu"/><path class="hwrr_1buw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-arrow-down"} {...others} />);
}

export default Component;
