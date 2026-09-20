import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g47rbeb6d.css';
import '../../css/a/avmp_1b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g47rbeb6d"/><path class="avmp_1b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:favicon-filled"} {...others} />);
}

export default Component;
