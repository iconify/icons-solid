import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilp8-kwbo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilp8-kwbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:ellipsis-horizontal-circle"} {...others} />);
}

export default Component;
