import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_p2r6ryq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_p2r6ryq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:creole"} {...others} />);
}

export default Component;
