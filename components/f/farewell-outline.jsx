import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdfn_0okk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdfn_0okk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:farewell-outline"} {...others} />);
}

export default Component;
