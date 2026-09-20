import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc_00rb9f.css';
import '../../css/b/briea6bwa.css';
import '../../css/f/f2n-x_-xs.css';
import '../../css/g/ggt5zd62s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mc_00rb9f"/><path class="briea6bwa"/><path class="f2n-x_-xs"/><path class="ggt5zd62s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:microphone-mute"} {...others} />);
}

export default Component;
