import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6ld_jb7u.css';
import '../../css/e/e85_kpklm.css';
import '../../css/r/r2y9xybok.css';
import '../../css/l/l5limrb2k.css';
import '../../css/t/tpv95qpsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6ld_jb7u"/><path clip-rule="evenodd" class="e85_kpklm"/><path class="r2y9xybok"/><path class="l5limrb2k"/><path class="tpv95qpsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-bold"} {...others} />);
}

export default Component;
