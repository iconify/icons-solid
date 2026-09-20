import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn-22cbdi.css';
import '../../css/z/z6avb9kpp.css';
import '../../css/q/q0o2xtmmp.css';
import '../../css/h/h2prjublm.css';
import '../../css/d/dejd5urgx.css';
import '../../css/b/bufi59bby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fn-22cbdi"/><path class="z6avb9kpp"/><path class="q0o2xtmmp"/><path class="h2prjublm"/><path class="dejd5urgx"/><path class="bufi59bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fitness-shaker"} {...others} />);
}

export default Component;
