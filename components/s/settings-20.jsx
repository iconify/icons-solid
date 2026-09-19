import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/saig2b03z.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGRC3mDdeu)" class="saig2b03z"/><defs><linearGradient id="SVGRC3mDdeu" x1="14.056" x2="4.533" y1="17.842" y2="3.074" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:settings-20"} {...others} />);
}

export default Component;
