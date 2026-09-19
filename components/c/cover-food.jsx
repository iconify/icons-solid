import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lmwtlnb7t.css';
import '../../css/b/bh6py3bao.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="lmwtlnb7t"/><path class="bh6py3bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cover-food"} {...others} />);
}

export default Component;
