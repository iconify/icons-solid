import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc6twwb3j.css';
import '../../css/j/jojtwt6vv.css';
import '../../css/x/x6asep9kq.css';
import '../../css/x/xd80u42ry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lc6twwb3j"/><path class="jojtwt6vv"/><path class="x6asep9kq"/><path class="xd80u42ry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:train-2"} {...others} />);
}

export default Component;
