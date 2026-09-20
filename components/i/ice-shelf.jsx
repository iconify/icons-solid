import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o76-z65vg.css';
import '../../css/v/v5zh6_2ok.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mjfrbba7t.css';
import '../../css/t/t02fqreuv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o76-z65vg"/><path class="v5zh6_2ok"/><g class="jn8qy4bru"><path class="mjfrbba7t"/><path class="t02fqreuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ice-shelf"} {...others} />);
}

export default Component;
