import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/oayi_h3_a.css';
import '../../css/w/whr-2bczi.css';
import '../../css/d/dajtiqb1m.css';
import '../../css/o/og_e9rbqn.css';
import '../../css/q/qazivdtnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="oayi_h3_a wm-shadow"/><path class="whr-2bczi wm-shadow"/><path class="dajtiqb1m"/><path class="og_e9rbqn"/><path class="qazivdtnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:droplets"} {...others} />);
}

export default Component;
