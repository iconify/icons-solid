import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bttwagbwd.css';
import '../../css/j/j3kp4bb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bttwagbwd"/><path class="j3kp4bb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-unlocked"} {...others} />);
}

export default Component;
