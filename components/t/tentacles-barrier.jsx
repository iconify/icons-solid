import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glxx8vb0s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="glxx8vb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tentacles-barrier"} {...others} />);
}

export default Component;
