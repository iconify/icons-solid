import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah82h4wex.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ah82h4wex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:hundred-points-symbol"} {...others} />);
}

export default Component;
