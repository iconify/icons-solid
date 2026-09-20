import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzw13i4rv.css';
import '../../css/f/fuokirb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzw13i4rv"/><path class="fuokirb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tool-box"} {...others} />);
}

export default Component;
