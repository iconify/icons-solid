import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1xv4fk9e.css';
import '../../css/k/kf0yeki3y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a1xv4fk9e"/><path class="kf0yeki3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-48"} {...others} />);
}

export default Component;
