import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azaf2ubzu.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="azaf2ubzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:subway-station"} {...others} />);
}

export default Component;
