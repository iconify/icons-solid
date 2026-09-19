import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wdr8q5b-s.css';
import '../../css/o/o0pzwbj7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wdr8q5b-s"/><path class="o0pzwbj7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:password-validation"} {...others} />);
}

export default Component;
