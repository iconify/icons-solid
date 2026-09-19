import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7dn_sbsa.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="x7dn_sbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:dropbox"} {...others} />);
}

export default Component;
