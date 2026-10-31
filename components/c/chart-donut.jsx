import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z2_qi4bgh.css';
import '../../css/n/n91vfzbdh.css';
import '../../css/u/u14jpn2xx.css';
import '../../css/s/s5jeuhhzk.css';
import '../../css/e/ek3_anb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z2_qi4bgh"/><path class="n91vfzbdh wm-shadow"/><path class="u14jpn2xx"/><path class="s5jeuhhzk"/><path class="ek3_anb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-donut"} {...others} />);
}

export default Component;
