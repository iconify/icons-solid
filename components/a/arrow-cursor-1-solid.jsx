import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk9bt3b1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yk9bt3b1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-cursor-1-solid"} {...others} />);
}

export default Component;
