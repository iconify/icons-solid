import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbl98olvj.css';
import '../../css/d/drqiwqb8a.css';
import '../../css/o/o22z116ol.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nbl98olvj"/><path class="drqiwqb8a"/><path class="o22z116ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pelton-wheel-48"} {...others} />);
}

export default Component;
