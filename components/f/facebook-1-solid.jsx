import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re4fspsiq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="re4fspsiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:facebook-1-solid"} {...others} />);
}

export default Component;
