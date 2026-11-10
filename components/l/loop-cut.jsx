import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/woeujfbbv.css';
import '../../css/r/r2z87mb4b.css';
import '../../css/o/ou7ihngoe.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="woeujfbbv"/><path class="r2z87mb4b"/><path clip-rule="evenodd" class="ou7ihngoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:loop-cut"} {...others} />);
}

export default Component;
