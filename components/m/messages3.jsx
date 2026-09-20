import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8jt9kccr.css';
import '../../css/q/q6wnbrnhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v8jt9kccr"/><path class="q6wnbrnhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:messages3"} {...others} />);
}

export default Component;
