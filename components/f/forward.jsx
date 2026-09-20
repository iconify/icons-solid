import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ilr6hpbnj.css';
import '../../css/p/pcurjzbpf.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ij2x_72vy"><path class="ilr6hpbnj"/><path class="pcurjzbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:forward"} {...others} />);
}

export default Component;
