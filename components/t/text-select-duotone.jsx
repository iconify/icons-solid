import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3wsr-blu.css';
import '../../css/g/ge5ik32ip.css';
import '../../css/p/p0-no_b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v3wsr-blu"/><path class="ge5ik32ip"/><path class="p0-no_b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-select-duotone"} {...others} />);
}

export default Component;
