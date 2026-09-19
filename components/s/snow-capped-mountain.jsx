import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo26x2-5t.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wo26x2-5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:snow-capped-mountain"} {...others} />);
}

export default Component;
