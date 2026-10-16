import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvx4u6ucp.css';
import '../../css/g/grugfhhze.css';
import '../../css/y/y-445ob1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uvx4u6ucp"/><path class="grugfhhze"/><path class="y-445ob1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tension-leg-48"} {...others} />);
}

export default Component;
