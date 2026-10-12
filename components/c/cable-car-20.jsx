import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et_s3vbgy.css';
import '../../css/q/q02_wz2ag.css';
import '../../css/y/y0bo9t7jj.css';
import '../../css/w/wm5qxnnej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="et_s3vbgy"/><path class="q02_wz2ag"/><path class="y0bo9t7jj"/><path class="wm5qxnnej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-car-20"} {...others} />);
}

export default Component;
