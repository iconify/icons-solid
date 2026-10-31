import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmlu_gbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmlu_gbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:columns-3-gloss"} {...others} />);
}

export default Component;
