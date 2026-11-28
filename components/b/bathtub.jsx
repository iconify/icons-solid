import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xhu3adbgv.css';
import '../../css/o/olf6d1bcx.css';
import '../../css/r/r3k9t2gzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xhu3adbgv"/><path class="olf6d1bcx"/><path class="r3k9t2gzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bathtub"} {...others} />);
}

export default Component;
