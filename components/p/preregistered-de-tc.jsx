import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-fh7-g-b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s-fh7-g-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:preregistered-de-tc"} {...others} />);
}

export default Component;
