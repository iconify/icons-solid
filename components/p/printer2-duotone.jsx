import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0lg4ccxu.css';
import '../../css/m/mxbtkwbjt.css';
import '../../css/g/gilv6ob-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m0lg4ccxu"/><path class="mxbtkwbjt"/><path class="gilv6ob-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:printer2-duotone"} {...others} />);
}

export default Component;
