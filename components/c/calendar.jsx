import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiww6dmoc.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7inorjqj.css';
import '../../css/o/o11gx5bhr.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="fiww6dmoc"/><g class="cuyn6tgcc"><path class="v7inorjqj"/><path class="o11gx5bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:calendar"} {...others} />);
}

export default Component;
