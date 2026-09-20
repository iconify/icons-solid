import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c-x4gjbgq.css';
import '../../css/n/n0_fj30lv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c-x4gjbgq"/><path class="n0_fj30lv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:radiology-scanner"} {...others} />);
}

export default Component;
