import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oslqv1qoq.css';
import '../../css/i/i2ugv7h_j.css';
import '../../css/u/un0mksblv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="oslqv1qoq"><rect class="i2ugv7h_j"/><rect class="un0mksblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:pause"} {...others} />);
}

export default Component;
