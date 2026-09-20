import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ore7j7b7q.css';
import '../../css/j/jtqqf76qb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ore7j7b7q"/><path class="jtqqf76qb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:angle"} {...others} />);
}

export default Component;
