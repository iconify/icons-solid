import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p-u2e6oea.css';
import '../../css/m/mi1u-9b_u.css';
import '../../css/q/qs3ey3exp.css';
import '../../css/q/qywvln1_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p-u2e6oea"/><path class="mi1u-9b_u"/><path class="qs3ey3exp"/><path class="qywvln1_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sunset-duotone"} {...others} />);
}

export default Component;
