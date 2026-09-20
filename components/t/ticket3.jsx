import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qm9f-1b5j.css';
import '../../css/m/m0pr6ebgc.css';
import '../../css/f/fhaiddqfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qm9f-1b5j"/><path class="m0pr6ebgc"/><path class="fhaiddqfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ticket3"} {...others} />);
}

export default Component;
