import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyc4jq30b.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vyc4jq30b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-scroll-up-down-move-scroll-vertical"} {...others} />);
}

export default Component;
