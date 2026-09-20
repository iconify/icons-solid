import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg2x72bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jg2x72bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-trend-down"} {...others} />);
}

export default Component;
