import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r31wnti5m.css';
import '../../css/i/i5za_y8px.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r31wnti5m"/><path class="i5za_y8px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:asp-net-core-light"} {...others} />);
}

export default Component;
