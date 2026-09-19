import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/s0v14hb6d.css';
import '../../css/b/b2ahrlpzy.css';
import '../../css/o/ofpxigb9s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="s0v14hb6d"/><path class="b2ahrlpzy"/><path class="ofpxigb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:home"} {...others} />);
}

export default Component;
