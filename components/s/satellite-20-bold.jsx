import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp0mn-ncp.css';
import '../../css/g/gxglj2bzq.css';
import '../../css/d/dq8fo2c6v.css';
import '../../css/e/ey9tmrrek.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bp0mn-ncp"/><path class="gxglj2bzq"/><path class="dq8fo2c6v"/><path class="ey9tmrrek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-20-bold"} {...others} />);
}

export default Component;
