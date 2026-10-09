import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_ircnbzb.css';
import '../../css/b/bncl5bqie.css';
import '../../css/g/gdjn7oggh.css';
import '../../css/d/dwr8i5vns.css';
import '../../css/f/fy270jxws.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m_ircnbzb"/><path class="bncl5bqie"/><path class="gdjn7oggh"/><path class="dwr8i5vns"/><path class="fy270jxws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:robot-arm-20-bold"} {...others} />);
}

export default Component;
