import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s2malxzwp.css';
import '../../css/d/d8kvdqb5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s2malxzwp"/><path class="d8kvdqb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shield-1"} {...others} />);
}

export default Component;
