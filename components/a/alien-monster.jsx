import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaf7zzb_b.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/a/aymm9687y.css';
import '../../css/r/rbrc508ky.css';
import '../../css/l/ldneyybya.css';
import '../../css/b/bs3jnjb_k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uaf7zzb_b"/><g class="hzhb0bcwn"><path class="aymm9687y"/><path class="rbrc508ky"/><path class="ldneyybya"/><path class="bs3jnjb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:alien-monster"} {...others} />);
}

export default Component;
