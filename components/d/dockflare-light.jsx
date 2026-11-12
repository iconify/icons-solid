import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuslflzdj.css';
import '../../css/b/bep1vk00f.css';
import '../../css/t/t1hj47b2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uuslflzdj"/><path class="bep1vk00f"/><path class="t1hj47b2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockflare-light"} {...others} />);
}

export default Component;
