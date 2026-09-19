import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aui1ykh8i.css';
import '../../css/q/qz_pprnfi.css';
import '../../css/b/bgvh92byt.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="ft5dv1b6b"><path class="aui1ykh8i"/><path class="qz_pprnfi"/><path class="bgvh92byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:xk"} {...others} />);
}

export default Component;
