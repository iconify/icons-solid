import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mim6rebae.css';
import '../../css/t/tfnvfpbmm.css';
import '../../css/a/at4prjc-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mim6rebae"/><path clip-rule="evenodd" class="tfnvfpbmm"/><path clip-rule="evenodd" class="at4prjc-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:signal-16-solid"} {...others} />);
}

export default Component;
