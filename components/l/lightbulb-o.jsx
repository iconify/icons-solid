import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0z8ph33h.css';

const viewBox = {"width":1024,"height":1536};
const content = `<path class="m0z8ph33h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:lightbulb-o"} {...others} />);
}

export default Component;
