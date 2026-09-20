import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t60g_5qhi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t60g_5qhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:forgejo-dark"} {...others} />);
}

export default Component;
