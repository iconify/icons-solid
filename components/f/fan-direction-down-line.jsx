import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbq8t_bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zbq8t_bqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fan-direction-down-line"} {...others} />);
}

export default Component;
