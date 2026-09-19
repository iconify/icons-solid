import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9g355xjh.css';
import '../../css/r/rszq9-bzg.css';
import '../../css/k/kdx_30b2i.css';
import '../../css/k/k4qc9hykm.css';
import '../../css/k/kd8xd4bmm.css';
import '../../css/b/b5ywwccub.css';
import '../../css/o/otn56cbcn.css';

const viewBox = {"width":100,"height":100.016};
const content = `<path class="h9g355xjh"/><path class="rszq9-bzg"/><path class="kdx_30b2i"/><path class="k4qc9hykm"/><path class="kd8xd4bmm"/><path class="b5ywwccub"/><path class="otn56cbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:save"} {...others} />);
}

export default Component;
