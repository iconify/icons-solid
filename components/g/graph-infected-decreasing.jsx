import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gph_qxhqv.css';
import '../../css/n/nsk92acve.css';
import '../../css/x/x2x40i-at.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gph_qxhqv"/><path class="nsk92acve"/><path class="x2x40i-at"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-infected-decreasing"} {...others} />);
}

export default Component;
