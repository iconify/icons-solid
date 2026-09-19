import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv7rk0b4n.css';
import '../../css/i/icd23tbey.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rv7rk0b4n"/><path class="icd23tbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:at-circle-outline"} {...others} />);
}

export default Component;
