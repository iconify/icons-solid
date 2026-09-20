import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jbsmz5cgw.css';
import '../../css/i/ida3dz87g.css';
import '../../css/d/dxi3c3bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jbsmz5cgw"/><path class="ida3dz87g"/><path class="dxi3c3bdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-muted"} {...others} />);
}

export default Component;
