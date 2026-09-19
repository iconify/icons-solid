import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8xvvwglv.css';
import '../../css/p/p__g4pb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8xvvwglv"/><path class="p__g4pb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:save-up-1"} {...others} />);
}

export default Component;
