import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4_xreixv.css';
import '../../css/t/te4hkcb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4_xreixv"/><path class="te4hkcb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-moved-24"} {...others} />);
}

export default Component;
