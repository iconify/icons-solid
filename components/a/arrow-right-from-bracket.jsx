import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m6idhz8-e.css';
import '../../css/y/y652i5bsv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="m6idhz8-e"/><path class="y652i5bsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-right-from-bracket"} {...others} />);
}

export default Component;
