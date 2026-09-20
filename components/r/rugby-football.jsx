import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a50926hxi.css';
import '../../css/i/ituedbz1l.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fw6z04b1v.css';
import '../../css/k/kgl8gnbwp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a50926hxi"/><path class="ituedbz1l"/><g class="ij2x_72vy"><path class="fw6z04b1v"/><path class="kgl8gnbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rugby-football"} {...others} />);
}

export default Component;
