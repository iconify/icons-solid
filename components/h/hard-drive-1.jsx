import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a2niimcau.css';
import '../../css/g/gqi8u6bvt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="a2niimcau"/><path class="gqi8u6bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hard-drive-1"} {...others} />);
}

export default Component;
