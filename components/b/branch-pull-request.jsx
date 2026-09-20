import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iot3cdb-n.css';
import '../../css/s/sa19hebfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iot3cdb-n"/><path class="sa19hebfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:branch-pull-request"} {...others} />);
}

export default Component;
