import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz30cqbhk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jz30cqbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:woozy-face-in-circle"} {...others} />);
}

export default Component;
