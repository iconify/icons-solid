import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbqbzqb3e.css';
import '../../css/g/gi8vxz4jo.css';
import '../../css/s/s2mrzdw6u.css';
import '../../css/u/us2wgibly.css';
import '../../css/k/k5qbcdbsg.css';
import '../../css/c/cqp-znbdp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xbqbzqb3e"/><path class="gi8vxz4jo"/><path class="s2mrzdw6u"/><path class="us2wgibly"/><path class="k5qbcdbsg"/><path class="cqp-znbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:raspberrypi-wordmark"} {...others} />);
}

export default Component;
