import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh3pmqntl.css';
import '../../css/u/udw7ehbsy.css';
import '../../css/w/whlu81bqh.css';
import '../../css/n/nevyk_2ur.css';
import '../../css/v/v_-fijb8i.css';
import '../../css/z/zyu71ebcr.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="gh3pmqntl"/><path class="udw7ehbsy"/><path class="whlu81bqh"/><path class="nevyk_2ur"/><path class="v_-fijb8i"/><path class="zyu71ebcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:baby-duo"} {...others} />);
}

export default Component;
