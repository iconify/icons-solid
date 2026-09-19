import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjeo63xsa.css';
import '../../css/k/kys_ktn6s.css';
import '../../css/y/ybh8gmbrc.css';
import '../../css/v/vmbns7bhy.css';
import '../../css/q/qz8r20h-u.css';
import '../../css/m/mgu3agb2r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tjeo63xsa"/><path class="kys_ktn6s"/><circle class="ybh8gmbrc"/><circle class="vmbns7bhy"/><circle class="qz8r20h-u"/><circle class="mgu3agb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:game-console"} {...others} />);
}

export default Component;
