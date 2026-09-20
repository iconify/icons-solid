import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dhgyshb7n.css';
import '../../css/u/uhxzdvbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dhgyshb7n"/><path class="uhxzdvbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:copy-var"} {...others} />);
}

export default Component;
