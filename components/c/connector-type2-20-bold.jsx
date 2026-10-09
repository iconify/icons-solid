import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aww2hc3xd.css';
import '../../css/d/d3halac9m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aww2hc3xd"/><path class="d3halac9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type2-20-bold"} {...others} />);
}

export default Component;
