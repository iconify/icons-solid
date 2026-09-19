import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-x8u3b8q.css';

const viewBox = {"width":897,"height":1024};
const content = `<path class="c-x8u3b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flowerpot"} {...others} />);
}

export default Component;
