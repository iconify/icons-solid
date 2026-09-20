import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3f0irb7g.css';
import '../../css/f/fn34yvb4k.css';
import '../../css/b/bb2etvm-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q3f0irb7g"/><path class="fn34yvb4k"/><path class="bb2etvm-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:water-sun-duotone"} {...others} />);
}

export default Component;
