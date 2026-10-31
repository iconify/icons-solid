import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nnkxxtb7a.css';
import '../../css/o/osswuu2kx.css';
import '../../css/x/x0bukmbry.css';
import '../../css/v/vlwxcxbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nnkxxtb7a wm-shadow"/><path class="osswuu2kx wm-shadow"/><path class="x0bukmbry"/><path class="vlwxcxbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:love-lock"} {...others} />);
}

export default Component;
