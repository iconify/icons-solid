import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeyh_rdcv.css';
import '../../css/m/mz5l_db3r.css';
import '../../css/c/c5154m1sd.css';
import '../../css/y/yno-x3bbw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xeyh_rdcv"/><path class="mz5l_db3r"/><path class="c5154m1sd"/><path class="yno-x3bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:teapot-48-bold"} {...others} />);
}

export default Component;
