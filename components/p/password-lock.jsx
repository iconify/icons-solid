import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/ek2q-vb-f.css';
import '../../css/m/mj9ltfbcd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ek2q-vb-f"/><path class="mj9ltfbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:password-lock"} {...others} />);
}

export default Component;
