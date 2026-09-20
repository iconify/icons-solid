import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbnx1ps0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dbnx1ps0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:decimal-comma-increase"} {...others} />);
}

export default Component;
