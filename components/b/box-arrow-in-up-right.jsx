import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r5fbmwldh.css';
import '../../css/s/sb0936ekk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="r5fbmwldh"/><path class="sb0936ekk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-in-up-right"} {...others} />);
}

export default Component;
