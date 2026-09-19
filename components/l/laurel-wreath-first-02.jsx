import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf39g8bxz.css';
import '../../css/k/ke7tnh9qz.css';
import '../../css/o/o6ndjgbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yf39g8bxz"/><path class="ke7tnh9qz"/><path class="o6ndjgbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laurel-wreath-first-02"} {...others} />);
}

export default Component;
