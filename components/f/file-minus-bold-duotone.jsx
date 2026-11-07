import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6gwrmjs.css';
import '../../css/q/qd_vnzb7g.css';
import '../../css/w/wo-i5ub4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="qd_vnzb7g"/><path class="wo-i5ub4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-minus-bold-duotone"} {...others} />);
}

export default Component;
