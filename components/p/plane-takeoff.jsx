import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rklufk44z.css';
import '../../css/n/nqxtptjjv.css';
import '../../css/o/oxdluxh3i.css';
import '../../css/n/nn-pwydjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rklufk44z wm-shadow"/><path class="nqxtptjjv wm-shadow"/><path class="oxdluxh3i"/><path class="nn-pwydjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:plane-takeoff"} {...others} />);
}

export default Component;
