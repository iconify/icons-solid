import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w8cdvmb8r.css';
import '../../css/d/dkv54xjtw.css';
import '../../css/k/kdo4s3bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w8cdvmb8r wm-shadow"/><path class="dkv54xjtw"/><path class="kdo4s3bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:scan-search"} {...others} />);
}

export default Component;
