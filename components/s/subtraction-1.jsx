import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-0g1m3_t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o-0g1m3_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:subtraction-1"} {...others} />);
}

export default Component;
