import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6e1offvk.css';
import '../../css/a/a_xac3lyr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s6e1offvk"/><path class="a_xac3lyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reitti-light"} {...others} />);
}

export default Component;
