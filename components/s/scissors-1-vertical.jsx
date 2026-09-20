import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-wkcrisg.css';
import '../../css/u/up737eb8h.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="p-wkcrisg"/><path class="up737eb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:scissors-1-vertical"} {...others} />);
}

export default Component;
