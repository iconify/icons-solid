import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2qs97b0q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j2qs97b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:intervals-icu-dark"} {...others} />);
}

export default Component;
