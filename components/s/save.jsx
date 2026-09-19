import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jyfz1-buj.css';
import '../../css/k/kgvs3x-sc.css';
import '../../css/y/yq7v54ihk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="jyfz1-buj"/><path class="kgvs3x-sc"/><path class="yq7v54ihk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:save"} {...others} />);
}

export default Component;
