import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohjgf69hh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohjgf69hh primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:expand-sparkles-duotone"} {...others} />);
}

export default Component;
