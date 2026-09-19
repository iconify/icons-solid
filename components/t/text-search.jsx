import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hevf84mpc.css';
import '../../css/b/b-c2ieb3w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="hevf84mpc"/><path class="b-c2ieb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:text-search"} {...others} />);
}

export default Component;
