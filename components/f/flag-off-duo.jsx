import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vgi0-qbpw.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/l/lcou3abui.css';
import '../../css/o/op1x1ovuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vgi0-qbpw"/><path class="qr4ochb5c wm-s"/><path class="lcou3abui"/><path class="op1x1ovuv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-off-duo"} {...others} />);
}

export default Component;
