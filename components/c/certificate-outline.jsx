import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aevw-3k9o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="aevw-3k9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:certificate-outline"} {...others} />);
}

export default Component;
