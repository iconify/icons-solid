import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1d6_ubyg.css';
import '../../css/x/xa9nshh4j.css';
import '../../css/b/b2mevoblx.css';
import '../../css/w/wf5541bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p1d6_ubyg"/><path class="xa9nshh4j"/><path class="b2mevoblx"/><path class="wf5541bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:hand-hexagon"} {...others} />);
}

export default Component;
