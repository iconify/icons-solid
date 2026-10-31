import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f95lbpbyd.css';
import '../../css/j/j1s59ubix.css';
import '../../css/u/uaaq6cc1k.css';
import '../../css/t/t4khc78ar.css';
import '../../css/z/zcj_ibuzw.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="f95lbpbyd"/><path class="j1s59ubix"/><path class="uaaq6cc1k"/><path class="t4khc78ar"/><path class="zcj_ibuzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:wales"} {...others} />);
}

export default Component;
