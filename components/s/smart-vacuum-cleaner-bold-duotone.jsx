import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/ar2pifewr.css';
import '../../css/l/l5y6mtboz.css';
import '../../css/r/rlumsgb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ar2pifewr"/><path class="l5y6mtboz"/></g><path class="rlumsgb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-bold-duotone"} {...others} />);
}

export default Component;
