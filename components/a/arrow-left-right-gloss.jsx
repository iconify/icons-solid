import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j021hccwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j021hccwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-right-gloss"} {...others} />);
}

export default Component;
