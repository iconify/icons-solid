import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tcy-4kbqq.css';
import '../../css/a/avj5mcgkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tcy-4kbqq"/><path class="avj5mcgkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hourglass-two-tone"} {...others} />);
}

export default Component;
