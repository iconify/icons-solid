import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxd3y1b3a.css';
import '../../css/r/rtb6i2lma.css';
import '../../css/i/i6hc7lykz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxd3y1b3a"/><path class="rtb6i2lma"/><path class="i6hc7lykz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bzr"} {...others} />);
}

export default Component;
