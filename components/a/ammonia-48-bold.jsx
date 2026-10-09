import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlpv10bkk.css';
import '../../css/a/aai7kpb9b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vlpv10bkk"/><path class="aai7kpb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-48-bold"} {...others} />);
}

export default Component;
