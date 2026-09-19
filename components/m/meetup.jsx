import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teqd7yb-q.css';

const viewBox = {"width":1856,"height":1792};
const content = `<path class="teqd7yb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:meetup"} {...others} />);
}

export default Component;
