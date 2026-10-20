import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxv9cpb_s.css';
import '../../css/l/lsq14_blx.css';
import '../../css/m/m603dbbqf.css';
import '../../css/l/lt1ufjbwq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wxv9cpb_s"/><path class="lsq14_blx"/><path class="m603dbbqf"/><path class="lt1ufjbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:devices-48-bold"} {...others} />);
}

export default Component;
