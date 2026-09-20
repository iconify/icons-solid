import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epu_tj-1c.css';
import '../../css/g/ghvq8sbip.css';
import '../../css/t/t2b8qbc3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="epu_tj-1c"/><path class="ghvq8sbip"/><path class="t2b8qbc3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:umbrella-bold-duotone"} {...others} />);
}

export default Component;
