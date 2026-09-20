import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-nldbc4k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y-nldbc4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:more-horizontal-outline"} {...others} />);
}

export default Component;
