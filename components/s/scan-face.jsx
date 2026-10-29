import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybijx7bms.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a9vkqabok.css';
import '../../css/r/r4509t42k.css';
import '../../css/a/ae8rm7b1q.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cxh-dygbt.css';
import '../../css/j/j7ut27brz.css';
import '../../css/p/ptiaeqy3d.css';
import '../../css/m/m8clgqebj.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGajy8c14B" class="ybijx7bms"/></defs><g class="t_2lkqbxb"><path class="a9vkqabok wm-shadow"/><path class="r4509t42k"/><path class="ae8rm7b1q"/><use href="#SVGajy8c14B" class="d2kvgvbvc"/><path class="cxh-dygbt"/><use href="#SVGajy8c14B" class="d2kvgvbvc"/><path class="j7ut27brz"/><path class="ptiaeqy3d wm-shine"/><path class="m8clgqebj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:scan-face"} {...others} />);
}

export default Component;
