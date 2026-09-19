import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pt-miowbi.css';
import '../../css/j/jtwtuabvq.css';
import '../../css/s/s12yr9pzl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="pt-miowbi"/><path class="jtwtuabvq"/><path class="s12yr9pzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:christmass-tree"} {...others} />);
}

export default Component;
