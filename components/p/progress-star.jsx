import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6l7oo_-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r6l7oo_-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:progress-star"} {...others} />);
}

export default Component;
