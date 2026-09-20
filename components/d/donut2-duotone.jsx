import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmf9j0bku.css';
import '../../css/o/oat20jbpp.css';
import '../../css/y/y_9bxsb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nmf9j0bku"/><path class="oat20jbpp"/><path class="y_9bxsb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:donut2-duotone"} {...others} />);
}

export default Component;
