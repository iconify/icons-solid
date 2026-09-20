import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oegqqvbgf.css';
import '../../css/d/di6z7bc9c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oegqqvbgf"/><path class="di6z7bc9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:globe-solid"} {...others} />);
}

export default Component;
