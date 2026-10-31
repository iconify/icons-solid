import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etaokrw9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etaokrw9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-days-gloss"} {...others} />);
}

export default Component;
