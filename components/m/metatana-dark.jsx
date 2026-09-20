import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9j_y2-pq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j9j_y2-pq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:metatana-dark"} {...others} />);
}

export default Component;
