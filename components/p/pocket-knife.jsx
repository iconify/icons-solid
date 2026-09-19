import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y450jp-4r.css';
import '../../css/c/c-iy5mskk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y450jp-4r"/><path class="c-iy5mskk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pocket-knife"} {...others} />);
}

export default Component;
