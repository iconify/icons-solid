import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sy5bpmbsm.css';
import '../../css/s/skfrh4bub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sy5bpmbsm"/><path class="skfrh4bub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:forward"} {...others} />);
}

export default Component;
