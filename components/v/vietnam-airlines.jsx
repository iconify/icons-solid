import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-6p3jmhi.css';

const viewBox = {"width":1515,"height":912};
const content = `<path class="i-6p3jmhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vietnam-airlines"} {...others} />);
}

export default Component;
