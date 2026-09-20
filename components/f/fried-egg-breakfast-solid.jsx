import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inp-gjbio.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="inp-gjbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:fried-egg-breakfast-solid"} {...others} />);
}

export default Component;
