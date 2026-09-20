import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7gie67ox.css';

const viewBox = {"width":52,"height":28};
const content = `<path clip-rule="evenodd" class="s7gie67ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cisco-light"} {...others} />);
}

export default Component;
