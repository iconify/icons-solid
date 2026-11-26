import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jea36wsph.css';
import '../../css/t/tep7rtb5a.css';

const viewBox = {"width":800,"height":156,"top":316.5};
const content = `<path class="jea36wsph"/><path class="tep7rtb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:anadolujet"} {...others} />);
}

export default Component;
