import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwjd4obrs.css';
import '../../css/d/dzk841b_w.css';
import '../../css/q/q402exb0f.css';
import '../../css/y/yx2eunost.css';
import '../../css/l/l5-fymbxs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gwjd4obrs"/><path class="dzk841b_w"/><path class="q402exb0f"/><path class="yx2eunost"/><path class="l5-fymbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:screwdriver"} {...others} />);
}

export default Component;
