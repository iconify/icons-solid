import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jojleqb8h.css';
import '../../css/y/ya30ufbie.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jojleqb8h"/><path class="ya30ufbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:cloud-arrow-up"} {...others} />);
}

export default Component;
