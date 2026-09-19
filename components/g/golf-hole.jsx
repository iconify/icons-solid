import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u18q8pm0e.css';
import '../../css/y/y0de9ac7y.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u18q8pm0e"/><path class="y0de9ac7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:golf-hole"} {...others} />);
}

export default Component;
