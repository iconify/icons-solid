import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zueh1cegf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zueh1cegf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fitbit-logo"} {...others} />);
}

export default Component;
