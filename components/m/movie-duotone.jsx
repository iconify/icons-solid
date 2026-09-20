import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8wdtyblq.css';
import '../../css/m/mn3wcdgwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8wdtyblq"/><path class="mn3wcdgwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:movie-duotone"} {...others} />);
}

export default Component;
