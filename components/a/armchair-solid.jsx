import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if3j1ybfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="if3j1ybfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:armchair-solid"} {...others} />);
}

export default Component;
