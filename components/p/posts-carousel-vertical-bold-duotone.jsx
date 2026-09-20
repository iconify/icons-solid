import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/o0l0yrncv.css';
import '../../css/y/yhu770tis.css';
import '../../css/y/ye7qo4bza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="o0l0yrncv"/><path class="yhu770tis"/></g><path class="ye7qo4bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-bold-duotone"} {...others} />);
}

export default Component;
