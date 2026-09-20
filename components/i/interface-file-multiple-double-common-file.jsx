import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e739tyt3r.css';
import '../../css/w/wummlp8ur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="e739tyt3r"/><path class="wummlp8ur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-multiple-double-common-file"} {...others} />);
}

export default Component;
