import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd6xqqbei.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qd6xqqbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:squared-cross"} {...others} />);
}

export default Component;
