import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c9gwod_vd.css';
import '../../css/j/ji9sd3owh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c9gwod_vd"/><path class="ji9sd3owh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:light-mode-bright-dark"} {...others} />);
}

export default Component;
