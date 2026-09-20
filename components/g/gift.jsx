import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kquf38e-o.css';
import '../../css/r/re9y4ex8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kquf38e-o"/><path class="re9y4ex8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:gift"} {...others} />);
}

export default Component;
