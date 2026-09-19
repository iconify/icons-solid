import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/db7dp1qih.css';
import '../../css/k/kcyfzcebs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="db7dp1qih"/><path class="kcyfzcebs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:permissions"} {...others} />);
}

export default Component;
