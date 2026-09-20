import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwb6n5blq.css';
import '../../css/r/r6k4p34go.css';
import '../../css/g/g7e8ebbye.css';
import '../../css/m/mogepibqn.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="hwb6n5blq"/><path class="r6k4p34go"/><path class="g7e8ebbye"/><path class="mogepibqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:arbitrum"} {...others} />);
}

export default Component;
