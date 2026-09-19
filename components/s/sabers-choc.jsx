import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhwhxl1gh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hhwhxl1gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sabers-choc"} {...others} />);
}

export default Component;
