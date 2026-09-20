import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peh9kwb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="peh9kwb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:equal"} {...others} />);
}

export default Component;
