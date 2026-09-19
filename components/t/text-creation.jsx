import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nn8id8fdf.css';
import '../../css/y/y7r8_w2re.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nn8id8fdf"/><path class="y7r8_w2re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-creation"} {...others} />);
}

export default Component;
