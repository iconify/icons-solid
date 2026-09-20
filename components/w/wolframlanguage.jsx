import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgfrr_9ri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgfrr_9ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:wolframlanguage"} {...others} />);
}

export default Component;
