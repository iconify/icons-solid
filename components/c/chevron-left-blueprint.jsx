import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sju0gac4t.css';
import '../../css/y/y1yeo1vat.css';
import '../../css/p/pouqntl0a.css';
import '../../css/q/q7mpc-b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sju0gac4t wm-deco"/><path class="wm-deco y1yeo1vat"/><path class="pouqntl0a"/><path class="q7mpc-b8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-left-blueprint"} {...others} />);
}

export default Component;
