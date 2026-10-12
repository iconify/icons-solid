import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg2ap3bxj.css';
import '../../css/l/l5-kz1soe.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gg2ap3bxj"/><path class="l5-kz1soe"/><path class="qdytrdbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-check-48"} {...others} />);
}

export default Component;
