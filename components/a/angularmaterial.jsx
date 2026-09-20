import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lokcj0ime.css';
import '../../css/j/j5pmud_cy.css';
import '../../css/c/coxnvyqqt.css';
import '../../css/y/ygttpsbfk.css';
import '../../css/c/cu2r7qb-i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lokcj0ime"/><path class="j5pmud_cy"/><path class="coxnvyqqt"/><path class="ygttpsbfk"/><path class="cu2r7qb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:angularmaterial"} {...others} />);
}

export default Component;
