import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/olzl9ub0u.css';
import '../../css/q/qmka5cuvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="olzl9ub0u"/><path class="qmka5cuvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:airplay"} {...others} />);
}

export default Component;
