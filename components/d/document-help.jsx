import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l6fo6mbww.css';
import '../../css/r/rfflkhy_z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="l6fo6mbww"/><path class="rfflkhy_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-help"} {...others} />);
}

export default Component;
