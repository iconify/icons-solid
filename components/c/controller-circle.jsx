import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyf8v3b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyf8v3b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:controller-circle"} {...others} />);
}

export default Component;
