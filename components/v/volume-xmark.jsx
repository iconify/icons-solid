import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrr9o3jlh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrr9o3jlh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:volume-xmark"} {...others} />);
}

export default Component;
