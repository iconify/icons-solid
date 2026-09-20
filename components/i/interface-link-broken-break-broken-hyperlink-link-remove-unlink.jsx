import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuwe5n7gt.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="iuwe5n7gt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-link-broken-break-broken-hyperlink-link-remove-unlink"} {...others} />);
}

export default Component;
