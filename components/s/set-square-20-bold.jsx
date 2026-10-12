import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo8-8l0ji.css';
import '../../css/n/nd0nkt-ng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lo8-8l0ji"/><path class="nd0nkt-ng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:set-square-20-bold"} {...others} />);
}

export default Component;
