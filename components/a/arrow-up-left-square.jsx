import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/euz5h5hcx.css';
import '../../css/y/y-8uw-nze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="euz5h5hcx"/><path clip-rule="evenodd" class="y-8uw-nze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-up-left-square"} {...others} />);
}

export default Component;
