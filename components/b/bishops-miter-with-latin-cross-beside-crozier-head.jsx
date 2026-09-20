import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp7mpy2fq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lp7mpy2fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bishops-miter-with-latin-cross-beside-crozier-head"} {...others} />);
}

export default Component;
