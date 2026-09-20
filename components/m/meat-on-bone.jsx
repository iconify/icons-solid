import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj594pvkk.css';
import '../../css/a/aah62ybjq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/aq3mqnb5c.css';
import '../../css/o/op3jkab0c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uj594pvkk"/><path class="aah62ybjq"/><g class="ij2x_72vy"><path class="aq3mqnb5c"/><path class="op3jkab0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:meat-on-bone"} {...others} />);
}

export default Component;
