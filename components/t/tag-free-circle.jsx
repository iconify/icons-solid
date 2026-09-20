import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gp16otb8y.css';
import '../../css/o/oy4rssbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gp16otb8y"/><path class="oy4rssbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:tag-free-circle"} {...others} />);
}

export default Component;
