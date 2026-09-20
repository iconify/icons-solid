import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czi0srbta.css';
import '../../css/c/cdpzc0bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czi0srbta"/><path class="cdpzc0bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:users-crown"} {...others} />);
}

export default Component;
