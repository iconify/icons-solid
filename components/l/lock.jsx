import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a00nwwb3o.css';
import '../../css/f/fdck00gde.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1amj96bk.css';
import '../../css/w/w4f8gd1fo.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="a00nwwb3o"/><path class="fdck00gde"/><g class="cuyn6tgcc"><path class="z1amj96bk"/><path class="w4f8gd1fo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:lock"} {...others} />);
}

export default Component;
