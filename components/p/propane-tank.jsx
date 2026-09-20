import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu2hdnbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu2hdnbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:propane-tank"} {...others} />);
}

export default Component;
