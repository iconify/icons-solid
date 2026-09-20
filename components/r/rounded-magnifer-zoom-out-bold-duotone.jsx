import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4z7qo_ir.css';
import '../../css/a/aygw_60rm.css';
import '../../css/q/qy2alob5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t4z7qo_ir"/><path class="aygw_60rm"/><path clip-rule="evenodd" class="qy2alob5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-zoom-out-bold-duotone"} {...others} />);
}

export default Component;
