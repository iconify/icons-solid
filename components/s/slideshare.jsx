import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezox_nb2h.css';
import '../../css/s/sigw4fbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezox_nb2h"/><path class="sigw4fbqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:slideshare"} {...others} />);
}

export default Component;
