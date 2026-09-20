import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1br3obmn.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="n1br3obmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:boat-ramp"} {...others} />);
}

export default Component;
