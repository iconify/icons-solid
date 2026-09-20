import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm3bjm3aa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rm3bjm3aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:connector-chart"} {...others} />);
}

export default Component;
