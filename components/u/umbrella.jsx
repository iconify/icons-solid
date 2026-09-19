import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/njc2mxbou.css';
import '../../css/w/wjpb1abqp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="njc2mxbou"/><path class="wjpb1abqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:umbrella"} {...others} />);
}

export default Component;
