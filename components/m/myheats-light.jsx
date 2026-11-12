import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz15a5bue.css';
import '../../css/h/hvvzmxb9t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qz15a5bue"/><path class="hvvzmxb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:myheats-light"} {...others} />);
}

export default Component;
