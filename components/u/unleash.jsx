import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h07yl7b2h.css';
import '../../css/m/m2bvsebeo.css';
import '../../css/z/z7i3a0bad.css';

const viewBox = {"width":23,"height":23};
const content = `<g class="ft5dv1b6b"><path class="h07yl7b2h"/><path class="m2bvsebeo"/><path class="z7i3a0bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unleash"} {...others} />);
}

export default Component;
