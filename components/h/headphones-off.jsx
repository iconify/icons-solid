import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayvl4j2qd.css';
import '../../css/x/x1zaw8b2v.css';
import '../../css/i/i2kihccnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 8.99 21)" class="ayvl4j2qd"/><rect transform="matrix(0 -1 -1 0 21.25 21)" class="ayvl4j2qd"/><path class="x1zaw8b2v"/><path class="i2kihccnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headphones-off"} {...others} />);
}

export default Component;
