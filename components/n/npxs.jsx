import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c54t2hbrn.css';
import '../../css/j/jvp9h3b4s.css';
import '../../css/g/g3r25me4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c54t2hbrn"/><path class="jvp9h3b4s"/><path clip-rule="evenodd" class="g3r25me4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:npxs"} {...others} />);
}

export default Component;
