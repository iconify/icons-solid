import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/faxp91bhv.css';
import '../../css/d/dqth9tb4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="faxp91bhv"/><path class="dqth9tb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:laptop-project-screen"} {...others} />);
}

export default Component;
