import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2z1e_f9o.css';
import '../../css/n/nfjsi_b6n.css';
import '../../css/c/cn2waqbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2z1e_f9o"/><path class="nfjsi_b6n"/><path class="cn2waqbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-open-bold-duotone"} {...others} />);
}

export default Component;
