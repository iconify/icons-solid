import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4e90qb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4e90qb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:lira-hexagon-solid"} {...others} />);
}

export default Component;
