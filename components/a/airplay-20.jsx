import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve2d5cbgv.css';
import '../../css/a/ay_ybxb5f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ve2d5cbgv"/><path class="ay_ybxb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airplay-20"} {...others} />);
}

export default Component;
