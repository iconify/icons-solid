import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vauqdib9h.css';
import '../../css/f/f_e511a-s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vauqdib9h"/><path class="f_e511a-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-profile-male"} {...others} />);
}

export default Component;
