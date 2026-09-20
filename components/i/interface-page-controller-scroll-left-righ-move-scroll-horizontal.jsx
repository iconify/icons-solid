import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iil-_0epu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="iil-_0epu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-scroll-left-righ-move-scroll-horizontal"} {...others} />);
}

export default Component;
