import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x-tp0_soj.css';
import '../../css/q/qrlg7vb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x-tp0_soj"/><path class="qrlg7vb3j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:subscript-duo"} {...others} />);
}

export default Component;
