import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/btlgwpbsn.css';
import '../../css/z/z6q0xzsvv.css';
import '../../css/q/q08n-4bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="btlgwpbsn"/><path class="z6q0xzsvv"/><path class="q08n-4bjs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-moon"} {...others} />);
}

export default Component;
