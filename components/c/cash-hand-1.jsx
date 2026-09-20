import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/n6q4nt5ox.css';
import '../../css/w/wc8nrozqf.css';
import '../../css/m/m5ljtkbic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="n6q4nt5ox"/><path class="wc8nrozqf"/><path class="m5ljtkbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cash-hand-1"} {...others} />);
}

export default Component;
