import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wpxpi9bcz.css';
import '../../css/o/o4c109bqk.css';
import '../../css/n/npcl06bve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="wpxpi9bcz"/><path class="o4c109bqk"/><path class="npcl06bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:coin-stack"} {...others} />);
}

export default Component;
