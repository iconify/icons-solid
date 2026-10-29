import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fc3kbgmfl.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/a/ahz5bx2fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fc3kbgmfl"/><path class="qr4ochb5c wm-s"/><path class="ahz5bx2fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bluetooth-off-duo"} {...others} />);
}

export default Component;
