import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p421z3nfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p421z3nfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drag-vertical-duocolor-round"} {...others} />);
}

export default Component;
