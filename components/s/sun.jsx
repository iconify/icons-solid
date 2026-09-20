import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2ukffbfm.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/ope5ptb9j.css';
import '../../css/d/d9dngzb9u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e2ukffbfm"/><g class="ij2x_72vy"><circle class="ope5ptb9j"/><path class="d9dngzb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sun"} {...others} />);
}

export default Component;
