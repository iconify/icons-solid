import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4t60l8ox.css';
import '../../css/h/hwnfhubeq.css';
import '../../css/h/hsyfdwbne.css';
import '../../css/g/g9z0_ccaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4t60l8ox"/><path class="hwnfhubeq"/><path class="hsyfdwbne"/><path class="g9z0_ccaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bittorrent"} {...others} />);
}

export default Component;
