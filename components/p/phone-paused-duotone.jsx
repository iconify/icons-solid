import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb7_855gm.css';
import '../../css/o/oieq8dp3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb7_855gm"/><path class="oieq8dp3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:phone-paused-duotone"} {...others} />);
}

export default Component;
