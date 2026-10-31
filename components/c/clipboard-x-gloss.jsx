import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi8-l0bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi8-l0bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-x-gloss"} {...others} />);
}

export default Component;
