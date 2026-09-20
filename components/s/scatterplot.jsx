import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwb7h4upf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pwb7h4upf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:scatterplot"} {...others} />);
}

export default Component;
