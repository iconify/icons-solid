import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e-hlhoo-s.css';
import '../../css/q/qrsr6i-gm.css';
import '../../css/v/v63ah-ban.css';
import '../../css/z/zq067jsaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e-hlhoo-s"/><path class="qrsr6i-gm"/><path class="v63ah-ban"/><path class="zq067jsaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:battery-full"} {...others} />);
}

export default Component;
