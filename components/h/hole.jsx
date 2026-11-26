import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nixhzr23g.css';
import '../../css/l/lpeb5vbby.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="matrix(2.4 0 0 2.4 14.897 -33.423)"><ellipse class="nixhzr23g"/><ellipse class="lpeb5vbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:hole"} {...others} />);
}

export default Component;
