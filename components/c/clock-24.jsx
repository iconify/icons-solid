import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4tanacyw.css';
import '../../css/d/d7wcr0g7m.css';
import '../../css/a/aq8w4_bqf.css';
import '../../css/c/c8pavbbjd.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/s/si93ilupf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGx7OgPdeE)" class="p4tanacyw"/><path fill="url(#SVGO5zL6cLK)" class="d7wcr0g7m"/><defs><linearGradient id="SVGx7OgPdeE" x1="5.333" x2="15.333" y1=".889" y2="23.111" gradientUnits="userSpaceOnUse"><stop class="aq8w4_bqf"/><stop offset="1" class="c8pavbbjd"/></linearGradient><linearGradient id="SVGO5zL6cLK" x1="10.981" x2="9.01" y1="7.148" y2="13.094" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="si93ilupf"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:clock-24"} {...others} />);
}

export default Component;
