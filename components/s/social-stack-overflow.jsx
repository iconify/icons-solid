import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk86jvbyg.css';
import '../../css/d/d7o9i2bac.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="jk86jvbyg"/><path class="d7o9i2bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-stack-overflow"} {...others} />);
}

export default Component;
