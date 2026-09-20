import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0_jum4ti.css';
import '../../css/q/q6h8h4bzx.css';
import '../../css/t/txdkxnr7s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0_jum4ti"/><path class="q6h8h4bzx"/><path class="txdkxnr7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qd"} {...others} />);
}

export default Component;
