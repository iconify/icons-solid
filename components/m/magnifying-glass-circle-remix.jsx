import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjayy9b5w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jjayy9b5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:magnifying-glass-circle-remix"} {...others} />);
}

export default Component;
