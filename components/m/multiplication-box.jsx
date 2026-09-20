import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke7fu1b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke7fu1b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:multiplication-box"} {...others} />);
}

export default Component;
