import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvku5ny2z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rvku5ny2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ngc-outline"} {...others} />);
}

export default Component;
