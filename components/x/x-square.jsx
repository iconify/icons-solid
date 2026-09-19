import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en-_y_-fq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="en-_y_-fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:x-square"} {...others} />);
}

export default Component;
