import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtljxnn2y.css';
import '../../css/n/niojdpbxv.css';

const viewBox = {"width":481.62,"height":82.75,"left":99.5,"top":84.68};
const content = `<path class="rtljxnn2y"/><path class="niojdpbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:stalwart-mail-server"} {...others} />);
}

export default Component;
