import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpfslacob.css';
import '../../css/d/dq9_gaclr.css';
import '../../css/c/clvzc9bjd.css';
import '../../css/v/vciy_oxlq.css';
import '../../css/n/nge6tfbxp.css';
import '../../css/p/pl74cqb7b.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="gpfslacob"/><circle class="dq9_gaclr"/><circle class="clvzc9bjd"/><circle class="vciy_oxlq"/><circle class="nge6tfbxp"/><path class="pl74cqb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:qq-plot"} {...others} />);
}

export default Component;
