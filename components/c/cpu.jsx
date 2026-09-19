import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn5ia6wrr.css';

const viewBox = {"width":496,"height":504};
const content = `<path class="wn5ia6wrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:cpu"} {...others} />);
}

export default Component;
