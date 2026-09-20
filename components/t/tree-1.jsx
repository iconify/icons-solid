import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wha7zu9wn.css';
import '../../css/f/fsn04zh9o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="wha7zu9wn"/><path class="fsn04zh9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tree-1"} {...others} />);
}

export default Component;
