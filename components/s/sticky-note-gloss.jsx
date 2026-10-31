import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4_3vwozi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4_3vwozi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sticky-note-gloss"} {...others} />);
}

export default Component;
