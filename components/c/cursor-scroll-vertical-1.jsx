import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvs623brm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvs623brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cursor-scroll-vertical-1"} {...others} />);
}

export default Component;
