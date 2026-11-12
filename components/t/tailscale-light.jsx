import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8vvxucjh.css';
import '../../css/x/xvp3f-_7x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c8vvxucjh"/><path class="xvp3f-_7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tailscale-light"} {...others} />);
}

export default Component;
