import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1bdn5bgd.css';
import '../../css/u/ufxyupbnl.css';
import '../../css/q/qmep5shkh.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="r1bdn5bgd"/><rect class="ufxyupbnl"/><rect class="qmep5shkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:menu-filled"} {...others} />);
}

export default Component;
