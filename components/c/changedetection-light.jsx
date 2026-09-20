import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_4tm0byp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e_4tm0byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:changedetection-light"} {...others} />);
}

export default Component;
