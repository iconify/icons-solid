import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujn-tbcgw.css';
import '../../css/r/r7__an0bz.css';
import '../../css/g/gcjjvpb6i.css';
import '../../css/a/as8ixpmmn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ujn-tbcgw"/><path class="r7__an0bz"/><path class="gcjjvpb6i"/><path class="as8ixpmmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:telemetry-20-bold"} {...others} />);
}

export default Component;
