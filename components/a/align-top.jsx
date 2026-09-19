import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zf63p2uya.css';
import '../../css/o/o5x-6cbab.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><rect transform="matrix(1 0 0 -1 6 15)" class="zf63p2uya"/><path class="o5x-6cbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:align-top"} {...others} />);
}

export default Component;
