import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6v728bzl.css';
import '../../css/f/f2qi-6cwe.css';
import '../../css/s/sj3u3hrzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s6v728bzl"/><path clip-rule="evenodd" class="f2qi-6cwe"/><path class="sj3u3hrzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-bold-duotone"} {...others} />);
}

export default Component;
