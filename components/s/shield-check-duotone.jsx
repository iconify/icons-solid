import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4p5vacnv.css';
import '../../css/v/v1l1tsapd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4p5vacnv"/><path class="v1l1tsapd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:shield-check-duotone"} {...others} />);
}

export default Component;
