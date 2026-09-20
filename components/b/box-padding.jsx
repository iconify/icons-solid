import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv6l8fblw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv6l8fblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-padding"} {...others} />);
}

export default Component;
