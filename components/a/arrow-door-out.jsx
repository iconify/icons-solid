import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zz4ioac6i.css';
import '../../css/k/k5fx1rbef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zz4ioac6i"/><path class="k5fx1rbef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-door-out"} {...others} />);
}

export default Component;
