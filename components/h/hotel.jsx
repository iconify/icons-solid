import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpp4vf5pi.css';
import '../../css/q/qhx66epws.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zpp4vf5pi"/><path class="qhx66epws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hotel"} {...others} />);
}

export default Component;
