import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ays5t9vtv.css';
import '../../css/o/o04cvfbvs.css';
import '../../css/y/ydqayxbwd.css';
import '../../css/q/q-jas_els.css';
import '../../css/e/elhq9ebhx.css';
import '../../css/l/ln2kmpxxf.css';
import '../../css/g/g2ddo-biu.css';
import '../../css/j/j-n5jdbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ays5t9vtv"/><path class="o04cvfbvs"/><path class="ydqayxbwd"/><path class="q-jas_els"/><path class="elhq9ebhx"/><path class="ln2kmpxxf"/><path class="g2ddo-biu"/><path class="j-n5jdbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-employee"} {...others} />);
}

export default Component;
