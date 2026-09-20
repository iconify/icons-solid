import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l47v6gbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l47v6gbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:racket-ball-light"} {...others} />);
}

export default Component;
