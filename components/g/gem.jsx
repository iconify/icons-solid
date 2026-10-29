import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/abcd9fgde.css';
import '../../css/u/ue-wlhbey.css';
import '../../css/e/ef2f8qbtf.css';
import '../../css/a/aws00-b1j.css';
import '../../css/e/e-k-t4yhs.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="abcd9fgde wm-shadow"/><path class="ue-wlhbey"/><path class="ef2f8qbtf"/><path class="aws00-b1j"/><path class="e-k-t4yhs wm-shine"/><path class="fpr348e2o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:gem"} {...others} />);
}

export default Component;
