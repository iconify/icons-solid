import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/samu3ccav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="samu3ccav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alpha-x-circle-outline"} {...others} />);
}

export default Component;
