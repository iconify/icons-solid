import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzqixot0a.css';
import '../../css/g/g66yx0zeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vzqixot0a"/><path class="g66yx0zeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bike-filled"} {...others} />);
}

export default Component;
