import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmq89q76z.css';
import '../../css/o/o03v5eiow.css';
import '../../css/y/yy2rggufu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zmq89q76z"/><path class="o03v5eiow"/><path class="yy2rggufu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:perfume-bold"} {...others} />);
}

export default Component;
