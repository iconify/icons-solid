import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bnnmvmbrc.css';
import '../../css/u/u-cfb250l.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="bnnmvmbrc"/><path class="u-cfb250l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:arrow-thick-thin-up"} {...others} />);
}

export default Component;
