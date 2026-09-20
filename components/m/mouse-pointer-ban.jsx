import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r19yuzbka.css';
import '../../css/z/zs13s_bpz.css';
import '../../css/k/kxnxc9bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r19yuzbka"/><circle class="zs13s_bpz"/><path class="kxnxc9bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mouse-pointer-ban"} {...others} />);
}

export default Component;
