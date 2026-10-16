import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxm1vbcze.css';
import '../../css/c/cdve484mo.css';
import '../../css/x/xwbticcgw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wxm1vbcze"/><path class="cdve484mo"/><path class="xwbticcgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-trailer-20"} {...others} />);
}

export default Component;
