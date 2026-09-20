import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/el79s-2uy.css';
import '../../css/d/dmh-b0bva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="el79s-2uy"/><path class="dmh-b0bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cursor-click"} {...others} />);
}

export default Component;
