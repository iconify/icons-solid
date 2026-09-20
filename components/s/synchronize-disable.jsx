import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/q/q46tmpbhq.css';
import '../../css/i/i-gohou0g.css';
import '../../css/o/ok3p2fbwz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="q46tmpbhq"/><path class="i-gohou0g"/><path class="ok3p2fbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:synchronize-disable"} {...others} />);
}

export default Component;
