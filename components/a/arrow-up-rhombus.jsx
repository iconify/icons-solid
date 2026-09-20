import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db6myboly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="db6myboly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-up-rhombus"} {...others} />);
}

export default Component;
