import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e_l4ddbdj.css';
import '../../css/k/k9htwcbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e_l4ddbdj"/><path class="k9htwcbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:database"} {...others} />);
}

export default Component;
