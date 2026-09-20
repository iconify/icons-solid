import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxuenzbsx.css';
import '../../css/b/bioz_2b6d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zxuenzbsx"/><path class="bioz_2b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:parking"} {...others} />);
}

export default Component;
