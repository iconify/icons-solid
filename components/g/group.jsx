import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0mfz3j4c.css';
import '../../css/u/uvedyyb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0mfz3j4c"/><path class="uvedyyb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:group"} {...others} />);
}

export default Component;
