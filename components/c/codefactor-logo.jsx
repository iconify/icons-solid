import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfr_u48ph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wfr_u48ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:codefactor-logo"} {...others} />);
}

export default Component;
