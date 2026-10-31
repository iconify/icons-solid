import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypvqe6-il.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k ypvqe6-il"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pipette-gloss"} {...others} />);
}

export default Component;
