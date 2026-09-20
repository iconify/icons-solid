import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvrua7b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvrua7b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:elevator-passenger-outline"} {...others} />);
}

export default Component;
