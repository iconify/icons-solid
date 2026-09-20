import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yruzez1gq.css';
import '../../css/e/eog0g2beg.css';
import '../../css/q/qy7eez15j.css';
import '../../css/m/mz-sgwb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="yruzez1gq"/><path class="eog0g2beg"/></g><path class="qy7eez15j"/><path class="mz-sgwb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-bold-duotone"} {...others} />);
}

export default Component;
