import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4h7vm6nh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4h7vm6nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:dish"} {...others} />);
}

export default Component;
