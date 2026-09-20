import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnu7rbbjb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lnu7rbbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:text-document-outline"} {...others} />);
}

export default Component;
