import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ai4b0kbev.css';
import '../../css/a/al0e8zqyv.css';
import '../../css/s/sdy0koojq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ai4b0kbev"/><path class="al0e8zqyv"/><path clip-rule="evenodd" class="sdy0koojq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:passport"} {...others} />);
}

export default Component;
