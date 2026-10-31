import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjiq25bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjiq25bbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-arrow-down-left-fill-round"} {...others} />);
}

export default Component;
