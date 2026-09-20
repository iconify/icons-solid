import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r81o4zb5w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r81o4zb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-4-solid"} {...others} />);
}

export default Component;
