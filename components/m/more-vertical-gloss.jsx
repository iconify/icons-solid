import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoqc6bbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aoqc6bbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:more-vertical-gloss"} {...others} />);
}

export default Component;
