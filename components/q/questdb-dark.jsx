import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt2audz9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mt2audz9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:questdb-dark"} {...others} />);
}

export default Component;
