import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ef0i2acpf.css';
import '../../css/a/awkz_8bgb.css';
import '../../css/d/dz95bzbua.css';
import '../../css/h/haj1e3bkt.css';
import '../../css/n/nfpe-8bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ef0i2acpf wm-shadow"/><path class="awkz_8bgb"/><path class="dz95bzbua"/><path class="haj1e3bkt"/><path class="nfpe-8bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gift-stack"} {...others} />);
}

export default Component;
