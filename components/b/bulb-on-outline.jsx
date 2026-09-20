import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj1g08qrn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sj1g08qrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bulb-on-outline"} {...others} />);
}

export default Component;
