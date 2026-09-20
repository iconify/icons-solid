import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzbjk9a7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzbjk9a7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:heart"} {...others} />);
}

export default Component;
