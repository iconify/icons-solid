import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wceggdbtg.css';
import '../../css/i/ingyikb1h.css';
import '../../css/u/u0csdv95s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wceggdbtg"/><path class="ingyikb1h"/><path class="u0csdv95s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:app-window-graph"} {...others} />);
}

export default Component;
