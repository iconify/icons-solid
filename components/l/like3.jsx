import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcz3qmqcf.css';
import '../../css/q/qweeg_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gcz3qmqcf"/><path class="qweeg_b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:like3"} {...others} />);
}

export default Component;
