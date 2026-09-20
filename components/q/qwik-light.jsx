import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1_2ocb6i.css';
import '../../css/z/z1wl8j83j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u1_2ocb6i"/><path class="z1wl8j83j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qwik-light"} {...others} />);
}

export default Component;
