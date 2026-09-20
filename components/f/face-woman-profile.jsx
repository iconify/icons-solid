import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc3cm42dg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hc3cm42dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:face-woman-profile"} {...others} />);
}

export default Component;
