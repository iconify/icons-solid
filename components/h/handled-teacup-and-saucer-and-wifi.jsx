import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt86abese.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bt86abese"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:handled-teacup-and-saucer-and-wifi"} {...others} />);
}

export default Component;
