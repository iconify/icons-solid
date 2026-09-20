import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/oc0dpze7y.css';
import '../../css/f/fi0kfwbzk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="oc0dpze7y"/><path class="fi0kfwbzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:laptop"} {...others} />);
}

export default Component;
