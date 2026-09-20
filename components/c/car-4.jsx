import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cru_k3cfg.css';
import '../../css/v/vfp2hcb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="cru_k3cfg"/><path class="vfp2hcb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:car-4"} {...others} />);
}

export default Component;
