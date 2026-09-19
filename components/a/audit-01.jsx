import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wfwd8y9av.css';
import '../../css/r/rhy2hmbom.css';
import '../../css/g/gxnq7z-rv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wfwd8y9av"/><path class="rhy2hmbom"/><path class="gxnq7z-rv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:audit-01"} {...others} />);
}

export default Component;
