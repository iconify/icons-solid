import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovghy0yrs.css';
import '../../css/a/a-nh-q2mi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ovghy0yrs"/><path class="a-nh-q2mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hacksaw-48"} {...others} />);
}

export default Component;
