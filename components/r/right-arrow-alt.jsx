import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em2d4achx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="em2d4achx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:right-arrow-alt"} {...others} />);
}

export default Component;
