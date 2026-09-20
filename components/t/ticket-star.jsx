import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymka79vtq.css';
import '../../css/y/yjwvrfb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ymka79vtq"/><path class="yjwvrfb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ticket-star"} {...others} />);
}

export default Component;
