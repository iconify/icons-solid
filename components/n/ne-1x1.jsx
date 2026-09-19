import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxpcs_bus.css';
import '../../css/n/ndyez317g.css';
import '../../css/o/o_qzz2bfh.css';
import '../../css/o/o5a6febyh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cxpcs_bus"/><path class="ndyez317g"/><path class="o_qzz2bfh"/><circle class="o5a6febyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ne-1x1"} {...others} />);
}

export default Component;
