import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/llap4kbyg.css';
import '../../css/c/ck_7e7hfa.css';
import '../../css/v/vt1ae2bts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="llap4kbyg"/><path class="ck_7e7hfa"/><path class="vt1ae2bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-down-wide-narrow"} {...others} />);
}

export default Component;
