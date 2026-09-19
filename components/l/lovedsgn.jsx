import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrdpt1k-l.css';

const viewBox = {"width":416,"height":488};
const content = `<path class="qrdpt1k-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:lovedsgn"} {...others} />);
}

export default Component;
