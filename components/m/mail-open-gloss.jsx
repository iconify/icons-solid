import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6z27mruz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6z27mruz wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-open-gloss"} {...others} />);
}

export default Component;
