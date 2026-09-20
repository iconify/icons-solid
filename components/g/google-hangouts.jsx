import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntzcl4b-u.css';
import '../../css/g/gjisevbwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntzcl4b-u"/><path class="gjisevbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:google-hangouts"} {...others} />);
}

export default Component;
