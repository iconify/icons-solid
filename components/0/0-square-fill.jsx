import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za4p_oyur.css';
import '../../css/u/uankymbfj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="za4p_oyur"/><path class="uankymbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:0-square-fill"} {...others} />);
}

export default Component;
