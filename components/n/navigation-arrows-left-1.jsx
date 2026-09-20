import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfh83brs.css';
import '../../css/q/q32ut8wiq.css';
import '../../css/s/sx3vdr7-k.css';
import '../../css/j/jj0igtbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mqfh83brs"/><path class="q32ut8wiq"/><path class="sx3vdr7-k"/><path class="jj0igtbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:navigation-arrows-left-1"} {...others} />);
}

export default Component;
