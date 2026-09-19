import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqmi1bi_j.css';
import '../../css/i/i9il0nflb.css';
import '../../css/i/ijudkumzw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wqmi1bi_j"/><path class="i9il0nflb"/><path class="ijudkumzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:kdl"} {...others} />);
}

export default Component;
