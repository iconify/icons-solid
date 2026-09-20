import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntug3ea9g.css';
import '../../css/y/y6g7tfbrh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ntug3ea9g"/><path class="y6g7tfbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-erpnext"} {...others} />);
}

export default Component;
