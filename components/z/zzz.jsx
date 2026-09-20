import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doj9dq_jg.css';
import '../../css/e/ehv3lsbxi.css';
import '../../css/h/hb8m0waiv.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="doj9dq_jg"><path class="ehv3lsbxi"/><path class="hb8m0waiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:zzz"} {...others} />);
}

export default Component;
