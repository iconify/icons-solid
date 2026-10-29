import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9jtn9bji.css';
import '../../css/j/j5hqbks0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9jtn9bji"/><path class="j5hqbks0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:circle"} {...others} />);
}

export default Component;
