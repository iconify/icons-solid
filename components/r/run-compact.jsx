import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gaf1vx3va.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="gaf1vx3va"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:run-compact"} {...others} />);
}

export default Component;
