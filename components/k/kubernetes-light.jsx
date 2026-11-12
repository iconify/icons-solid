import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_eb1s5-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_eb1s5-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kubernetes-light"} {...others} />);
}

export default Component;
