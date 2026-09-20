import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vks7r2l6m.css';
import '../../css/b/b_plghb6o.css';
import '../../css/n/nj5w0zwyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vks7r2l6m"/><path class="b_plghb6o"/><path class="nj5w0zwyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-switch-account"} {...others} />);
}

export default Component;
