import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlryp1yvy.css';
import '../../css/r/r7x3jcbmt.css';
import '../../css/w/wyq0_0bpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qlryp1yvy"/><path class="r7x3jcbmt"/><path class="wyq0_0bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:atom-duotone"} {...others} />);
}

export default Component;
