import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4-z48bjf.css';
import '../../css/h/hua-a9bjv.css';
import '../../css/n/nr0sg1b4q.css';
import '../../css/y/y85-cbbqp.css';
import '../../css/c/cd7p0qbfp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k4-z48bjf"/><path class="hua-a9bjv"/><path class="nr0sg1b4q"/><path class="y85-cbbqp"/><path class="cd7p0qbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:warning-strip"} {...others} />);
}

export default Component;
