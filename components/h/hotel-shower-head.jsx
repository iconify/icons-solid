import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd1r2ibat.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kd1r2ibat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hotel-shower-head"} {...others} />);
}

export default Component;
