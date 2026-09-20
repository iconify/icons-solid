import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8sy_cbmx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n8sy_cbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:techcrunch-light"} {...others} />);
}

export default Component;
