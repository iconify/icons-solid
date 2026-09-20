import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6zj-j8sb.css';
import '../../css/q/q8dpj2bvk.css';
import '../../css/h/h6idkx0rl.css';
import '../../css/y/yv8125n5a.css';
import '../../css/b/bkrqpvb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u6zj-j8sb"/><path class="q8dpj2bvk"/><path class="h6idkx0rl"/><path class="yv8125n5a"/><path class="bkrqpvb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:drum-2"} {...others} />);
}

export default Component;
