import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xg6irgbug.css';
import '../../css/n/nqp9kabbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="xg6irgbug"/><path class="nqp9kabbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cursor-scroll-2"} {...others} />);
}

export default Component;
