import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/euohjtbeq.css';
import '../../css/e/eqsrjubfx.css';
import '../../css/c/cdgrumk9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="euohjtbeq wm-shadow"/><path class="eqsrjubfx wm-shadow"/><path class="cdgrumk9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gold-ingot"} {...others} />);
}

export default Component;
