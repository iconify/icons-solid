import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spd8p2yvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spd8p2yvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:caret-up-down"} {...others} />);
}

export default Component;
