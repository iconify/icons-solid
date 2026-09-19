import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drlc3ff8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drlc3ff8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:shutter-70"} {...others} />);
}

export default Component;
