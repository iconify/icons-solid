import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w74x_7b5n.css';
import '../../css/s/sf89cnbpt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w74x_7b5n"/><path class="sf89cnbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cachyos-light"} {...others} />);
}

export default Component;
