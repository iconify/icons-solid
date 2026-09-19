import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq9gnfhuz.css';
import '../../css/e/e55r56knd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="eq9gnfhuz"/><path class="e55r56knd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:switch"} {...others} />);
}

export default Component;
