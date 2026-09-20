import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sq-6dcfcl.css';
import '../../css/e/e6agddb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="sq-6dcfcl"/><path class="e6agddb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:toy-brick"} {...others} />);
}

export default Component;
