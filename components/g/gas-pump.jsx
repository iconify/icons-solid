import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/ql1ihubfm.css';
import '../../css/s/slwjvibek.css';
import '../../css/b/berxhxbrt.css';
import '../../css/c/cwzx67y1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ql1ihubfm"/><path class="slwjvibek"/><path class="berxhxbrt"/><path class="cwzx67y1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gas-pump"} {...others} />);
}

export default Component;
