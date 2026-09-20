import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gt0t_gfvc.css';
import '../../css/n/ni1x5_bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="gt0t_gfvc"/><path class="ni1x5_bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bubble-chat-check-1"} {...others} />);
}

export default Component;
