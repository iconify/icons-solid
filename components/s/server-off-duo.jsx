import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gof6yrqzo.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/kk0onebow.css';
import '../../css/a/aq_2o7bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gof6yrqzo"/><path class="qr4ochb5c wm-s"/><path class="kk0onebow"/><path class="aq_2o7bhr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-off-duo"} {...others} />);
}

export default Component;
