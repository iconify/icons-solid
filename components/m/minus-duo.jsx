import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqj8zfbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqj8zfbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minus-duo"} {...others} />);
}

export default Component;
