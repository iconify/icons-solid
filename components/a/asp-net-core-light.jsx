import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r31wnti5m.css';
import '../../css/d/d_4d0bbhy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r31wnti5m"/><path class="d_4d0bbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:asp-net-core-light"} {...others} />);
}

export default Component;
