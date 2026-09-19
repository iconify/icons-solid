import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8iz40ljm.css';
import '../../css/d/dit6uybka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i8iz40ljm"/><path class="dit6uybka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bulb-outline"} {...others} />);
}

export default Component;
