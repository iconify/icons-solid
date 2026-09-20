import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqtx79bpt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mqtx79bpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:missouri-with-capital-star"} {...others} />);
}

export default Component;
