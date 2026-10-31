import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e_tbnbb2b.css';
import '../../css/v/vidj0ab8f.css';
import '../../css/x/xhfks0bnu.css';
import '../../css/i/iv_au28xx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e_tbnbb2b wm-shadow"/><path class="vidj0ab8f wm-shadow"/><path class="xhfks0bnu"/><path class="iv_au28xx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sigma"} {...others} />);
}

export default Component;
