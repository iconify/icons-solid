import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npm2oqxob.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="npm2oqxob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:subarr-light"} {...others} />);
}

export default Component;
