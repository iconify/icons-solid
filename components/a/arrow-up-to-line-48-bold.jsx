import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-29nt30n.css';
import '../../css/s/sj5ux4q1a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m-29nt30n"/><path class="sj5ux4q1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-to-line-48-bold"} {...others} />);
}

export default Component;
