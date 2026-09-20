import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/e/el6yxyw-a.css';
import '../../css/w/wh8537bck.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="el6yxyw-a"/><path class="wh8537bck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-reload-horizontal-2"} {...others} />);
}

export default Component;
