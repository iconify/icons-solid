import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z7uskkh4x.css';
import '../../css/o/o3t4k4blu.css';
import '../../css/o/oqq9phbgp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="z7uskkh4x"/><path class="o3t4k4blu"/><path class="oqq9phbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:natrue-ecology-recycle-1-sign-environment-protect-save-arrows"} {...others} />);
}

export default Component;
