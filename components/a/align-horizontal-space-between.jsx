import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uwst6zbsv.css';
import '../../css/y/ywhlzacjl.css';
import '../../css/c/cg66pc8qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uwst6zbsv"/><path class="ywhlzacjl"/><path class="cg66pc8qp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:align-horizontal-space-between"} {...others} />);
}

export default Component;
