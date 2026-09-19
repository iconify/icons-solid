import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmuni9p9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dmuni9p9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:dislike-solid"} {...others} />);
}

export default Component;
