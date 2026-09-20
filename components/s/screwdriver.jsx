import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d07xzfy7h.css';
import '../../css/m/mtmd5sbur.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="d07xzfy7h"/><path class="mtmd5sbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:screwdriver"} {...others} />);
}

export default Component;
