import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2f6fwbpy.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="n2f6fwbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:hair-care"} {...others} />);
}

export default Component;
