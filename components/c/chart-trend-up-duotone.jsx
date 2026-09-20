import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpd0j0tem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fpd0j0tem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-trend-up-duotone"} {...others} />);
}

export default Component;
