import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yawb1gbpi.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/c/cqb1wcccy.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wm-k yawb1gbpi"/><path class="psnkz2bcb wm-k"/><circle class="cqb1wcccy wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-off-duo"} {...others} />);
}

export default Component;
