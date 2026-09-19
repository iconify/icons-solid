import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq7majb9p.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="pq7majb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:list-number-fill-12"} {...others} />);
}

export default Component;
