import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4_z5ubfr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/s5ao597ql.css';
import '../../css/n/nsg7l2cph.css';
import '../../css/j/jd818u1tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a4_z5ubfr"/><g class="mc2zb0bvp"><path class="s5ao597ql"/><path class="nsg7l2cph"/><path class="jd818u1tz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-alphabetically-bold-duotone"} {...others} />);
}

export default Component;
