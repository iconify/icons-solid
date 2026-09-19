import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/by3fl4p3h.css';
import '../../css/g/gj7gkklqw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="by3fl4p3h"/><path class="gj7gkklqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:lightning-in-clockwise-arrow"} {...others} />);
}

export default Component;
