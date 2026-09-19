import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duy4fwuoh.css';
import '../../css/y/ym7s1o7nd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="duy4fwuoh"/><path class="ym7s1o7nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bicycle-sharp"} {...others} />);
}

export default Component;
