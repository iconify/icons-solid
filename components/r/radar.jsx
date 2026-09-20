import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwqf32bdv.css';
import '../../css/u/u48ityuik.css';
import '../../css/v/vxml6xbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwqf32bdv"/><path class="u48ityuik"/><path class="vxml6xbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:radar"} {...others} />);
}

export default Component;
