import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d_3cn5lgt.css';
import '../../css/a/as_2tqywd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="d_3cn5lgt"/><path class="as_2tqywd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:beach"} {...others} />);
}

export default Component;
