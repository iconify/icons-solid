import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j30yx6bec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j30yx6bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:graduate-cap"} {...others} />);
}

export default Component;
