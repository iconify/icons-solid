import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pifoudbdm.css';
import '../../css/v/vuyyv1qil.css';
import '../../css/v/vr8_6rk9r.css';
import '../../css/l/lggnzh-ca.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pifoudbdm"/><path class="vuyyv1qil"/><path class="vr8_6rk9r"/><path class="lggnzh-ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-tester-48-bold"} {...others} />);
}

export default Component;
