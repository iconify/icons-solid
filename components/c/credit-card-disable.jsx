import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sqqk1noza.css';
import '../../css/m/mjtz0qljx.css';
import '../../css/d/dmg50-bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sqqk1noza"/><path class="mjtz0qljx"/><path class="dmg50-bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:credit-card-disable"} {...others} />);
}

export default Component;
