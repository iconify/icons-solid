import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3ct_9bhw.css';

const viewBox = {"width":1056,"height":1408};
const content = `<g transform="translate(0 1408) scale(1 -1)"><path class="t3ct_9bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:level-down"} {...others} />);
}

export default Component;
