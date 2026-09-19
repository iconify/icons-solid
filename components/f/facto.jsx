import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap3nt-pxe.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="ap3nt-pxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:facto"} {...others} />);
}

export default Component;
