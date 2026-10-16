import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrtzqb8qa.css';
import '../../css/p/p0_q9fb5b.css';
import '../../css/y/y-445ob1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nrtzqb8qa"/><path class="p0_q9fb5b"/><path class="y-445ob1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-base-48"} {...others} />);
}

export default Component;
