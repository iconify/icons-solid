import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldpv-hf5n.css';
import '../../css/y/yg0jyhbej.css';
import '../../css/h/hba5kpbit.css';
import '../../css/n/nn551pqdp.css';
import '../../css/y/yu8pyjesp.css';
import '../../css/x/xl-g2xt0h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ldpv-hf5n"/><path class="yg0jyhbej"/><path class="hba5kpbit"/><path class="nn551pqdp"/><path class="yu8pyjesp"/><path class="xl-g2xt0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-drive"} {...others} />);
}

export default Component;
