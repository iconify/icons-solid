import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ria-2-bok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ria-2-bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tv-gloss"} {...others} />);
}

export default Component;
