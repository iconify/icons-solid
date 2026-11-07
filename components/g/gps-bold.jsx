import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj6io99fw.css';
import '../../css/x/xrub8bc1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tj6io99fw"/><path class="xrub8bc1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gps-bold"} {...others} />);
}

export default Component;
