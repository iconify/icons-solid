import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_4vp8bgj.css';
import '../../css/n/nr2f0pbpu.css';
import '../../css/e/esvv2bcpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y_4vp8bgj"/><path class="nr2f0pbpu"/><path class="esvv2bcpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bed-single-02"} {...others} />);
}

export default Component;
