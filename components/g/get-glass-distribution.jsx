import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg4rx1bxy.css';

const viewBox = {"width":1085.565,"height":1085.093};
const content = `<path class="qg4rx1bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:get-glass-distribution"} {...others} />);
}

export default Component;
