import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy_c_3btn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vy_c_3btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:snowflake-off"} {...others} />);
}

export default Component;
