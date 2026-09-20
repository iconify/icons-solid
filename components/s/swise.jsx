import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6i609scc.css';
import '../../css/c/cnc48xb-n.css';
import '../../css/r/rtbltcbsy.css';
import '../../css/a/au6cvt0tc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6i609scc"/><path class="cnc48xb-n"/><path class="rtbltcbsy"/><path class="au6cvt0tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:swise"} {...others} />);
}

export default Component;
