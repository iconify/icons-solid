import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibikkj_rr.css';
import '../../css/s/s9f4ylf6q.css';
import '../../css/f/fuaum9s1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ibikkj_rr"/><path class="s9f4ylf6q"/><path class="fuaum9s1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:night-wind-2"} {...others} />);
}

export default Component;
