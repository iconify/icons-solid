import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f7ok_kqmj.css';
import '../../css/e/etsvcwb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f7ok_kqmj"/><path class="etsvcwb7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-dollar"} {...others} />);
}

export default Component;
