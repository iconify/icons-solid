import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj_m6s_8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mj_m6s_8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-snowflake"} {...others} />);
}

export default Component;
