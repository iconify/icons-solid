import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/l/laj-3eauw.css';
import '../../css/d/dd632fbiz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="laj-3eauw"/><path class="dd632fbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:3d-rotate-y-axis"} {...others} />);
}

export default Component;
