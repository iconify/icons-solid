import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nefq8ib6a.css';
import '../../css/n/nbx9fsn3d.css';
import '../../css/v/vn79wibol.css';
import '../../css/x/xm4cc_m2k.css';
import '../../css/x/x5scij4wi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nefq8ib6a"/><path clip-rule="evenodd" class="nbx9fsn3d"/><path class="vn79wibol"/><path clip-rule="evenodd" class="xm4cc_m2k"/><path class="x5scij4wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:layers-duotone"} {...others} />);
}

export default Component;
