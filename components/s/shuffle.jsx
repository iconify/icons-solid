import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/j/j2dnirfja.css';
import '../../css/i/if7n55bna.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="j2dnirfja"/><path class="if7n55bna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:shuffle"} {...others} />);
}

export default Component;
