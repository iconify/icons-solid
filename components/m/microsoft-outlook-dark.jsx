import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt7qbeb9s.css';
import '../../css/i/iozszdcyt.css';
import '../../css/h/h6o6s8bar.css';
import '../../css/a/a66hvfb8z.css';
import '../../css/r/rz_pfy2nl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zt7qbeb9s"/><path class="iozszdcyt"/><path class="h6o6s8bar"/><path class="a66hvfb8z"/><path class="rz_pfy2nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-outlook-dark"} {...others} />);
}

export default Component;
