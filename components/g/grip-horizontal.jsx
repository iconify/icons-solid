import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-e2kpb1y.css';
import '../../css/x/x-5w1fb0e.css';
import '../../css/h/hax8mkbsy.css';
import '../../css/l/l_lmp1bvv.css';
import '../../css/k/kowmqukzb.css';
import '../../css/r/rne9lqbvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="o-e2kpb1y"/><circle class="x-5w1fb0e"/><circle class="hax8mkbsy"/><circle class="l_lmp1bvv"/><circle class="kowmqukzb"/><circle class="rne9lqbvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:grip-horizontal"} {...others} />);
}

export default Component;
