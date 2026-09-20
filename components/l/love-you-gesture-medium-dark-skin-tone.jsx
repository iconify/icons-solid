import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2fw43bov.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a5uwe6b_p.css';
import '../../css/s/s9-53e3xp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v2fw43bov"/><g class="jn8qy4bru"><path class="a5uwe6b_p"/><path class="s9-53e3xp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:love-you-gesture-medium-dark-skin-tone"} {...others} />);
}

export default Component;
