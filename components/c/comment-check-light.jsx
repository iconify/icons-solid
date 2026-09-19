import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ot1gaab8g.css';
import '../../css/k/k4wjgvq4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ot1gaab8g"/><path class="k4wjgvq4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-check-light"} {...others} />);
}

export default Component;
