import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu85lyb9a.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/o-mn23hdo.css';
import '../../css/m/mtmqpmbwb.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="fu85lyb9a"/><g class="ij2x_72vy"><circle class="o-mn23hdo"/><path class="mtmqpmbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bright-button"} {...others} />);
}

export default Component;
