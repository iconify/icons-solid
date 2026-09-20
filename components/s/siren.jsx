import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unh320b8e.css';
import '../../css/b/b5yiy186s.css';
import '../../css/l/l7uasacuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="unh320b8e"/><path clip-rule="evenodd" class="b5yiy186s"/><path class="l7uasacuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:siren"} {...others} />);
}

export default Component;
