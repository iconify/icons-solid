import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw5qyibzg.css';
import '../../css/j/jfyntqbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw5qyibzg"/><path class="jfyntqbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heart-crack"} {...others} />);
}

export default Component;
