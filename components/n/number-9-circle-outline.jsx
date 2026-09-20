import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooh1spb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ooh1spb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:number-9-circle-outline"} {...others} />);
}

export default Component;
