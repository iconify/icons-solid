import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uynw62asb.css';
import '../../css/g/g3d2r77id.css';
import '../../css/e/eeq63qngk.css';
import '../../css/m/m23qtybqe.css';
import '../../css/k/k3ede68cu.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="uynw62asb wm-shadow"/><path class="g3d2r77id"/><path class="eeq63qngk"/><path class="m23qtybqe"/><path class="k3ede68cu wm-shine"/><path class="fpr348e2o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:baseball"} {...others} />);
}

export default Component;
