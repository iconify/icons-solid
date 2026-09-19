import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cgdlnt7gm.css';
import '../../css/f/fh-vz5swt.css';
import '../../css/r/r-77_6bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cgdlnt7gm"/><rect class="fh-vz5swt"/><path class="r-77_6bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-plus"} {...others} />);
}

export default Component;
