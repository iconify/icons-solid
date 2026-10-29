import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryga3t09v.css';
import '../../css/a/a5yw_6oaq.css';
import '../../css/l/ldx9zzrvk.css';
import '../../css/y/yv1hijb4a.css';
import '../../css/d/dprweg1li.css';
import '../../css/s/sgz5z8nxq.css';
import '../../css/a/azc7qua8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryga3t09v wm-shadow"/><path class="a5yw_6oaq"/><path class="ldx9zzrvk"/><path class="yv1hijb4a"/><path class="dprweg1li"/><path class="sgz5z8nxq wm-shine"/><path class="azc7qua8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:playground"} {...others} />);
}

export default Component;
