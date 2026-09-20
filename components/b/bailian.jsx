import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahhfr3bfy.css';
import '../../css/e/e-ujdisfn.css';
import '../../css/m/mr8sehbee.css';
import '../../css/m/m0jkgebcy.css';
import '../../css/x/x4bx8mf0z.css';
import '../../css/e/eqgurmq6d.css';
import '../../css/u/u0e28kblj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahhfr3bfy"/><path class="e-ujdisfn"/><path class="mr8sehbee"/><path class="m0jkgebcy"/><path class="x4bx8mf0z"/><path class="eqgurmq6d"/><path class="u0e28kblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bailian"} {...others} />);
}

export default Component;
