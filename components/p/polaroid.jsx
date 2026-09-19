import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cca0rsbge.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cca0rsbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:polaroid"} {...others} />);
}

export default Component;
