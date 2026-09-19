import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onwa8sb2c.css';
import '../../css/k/kjwymwxwh.css';
import '../../css/i/iur_obb4v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="onwa8sb2c"/><path class="kjwymwxwh"/><path class="iur_obb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dollar-bills-duo"} {...others} />);
}

export default Component;
