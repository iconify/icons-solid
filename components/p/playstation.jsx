import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/monshfqpy.css';
import '../../css/w/wbrphj3qk.css';
import '../../css/s/sc3tshfxe.css';
import '../../css/a/ahxg7rb2t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="monshfqpy"/><path class="wbrphj3qk"/><path class="sc3tshfxe"/><path class="ahxg7rb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:playstation"} {...others} />);
}

export default Component;
