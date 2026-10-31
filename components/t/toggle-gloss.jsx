import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn6qthh5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bn6qthh5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toggle-gloss"} {...others} />);
}

export default Component;
