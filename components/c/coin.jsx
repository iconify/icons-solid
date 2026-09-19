import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vkpfohz9v.css';
import '../../css/n/ngd-57baz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vkpfohz9v"/><path class="ngd-57baz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:coin"} {...others} />);
}

export default Component;
