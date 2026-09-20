import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vs_617bvo.css';
import '../../css/r/rafrg1b6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="vs_617bvo"/><path class="rafrg1b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:database-network-1"} {...others} />);
}

export default Component;
