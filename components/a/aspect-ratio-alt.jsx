import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us8wt9b6x.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="us8wt9b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:aspect-ratio-alt"} {...others} />);
}

export default Component;
