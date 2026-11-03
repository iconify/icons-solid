import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0z9-6mmj.css';
import '../../css/d/djhg-vbxr.css';
import '../../css/j/j0k4v8zak.css';
import '../../css/c/c4voa1b3t.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r0z9-6mmj"/><path class="djhg-vbxr"/><path class="j0k4v8zak"/><path class="c4voa1b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:phpmyadmin"} {...others} />);
}

export default Component;
