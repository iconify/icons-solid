import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7issnsim.css';
import '../../css/p/ptak6-b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7issnsim"/><path class="ptak6-b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-tracks-24"} {...others} />);
}

export default Component;
