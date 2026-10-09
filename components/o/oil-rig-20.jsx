import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec5zy9y1r.css';
import '../../css/l/l427qbccv.css';
import '../../css/v/vatnkib2t.css';
import '../../css/x/xhp71gb7v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ec5zy9y1r"/><path class="l427qbccv"/><path class="vatnkib2t"/><path class="xhp71gb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-rig-20"} {...others} />);
}

export default Component;
