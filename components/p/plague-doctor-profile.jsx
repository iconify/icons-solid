import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxzz49brv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jxzz49brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:plague-doctor-profile"} {...others} />);
}

export default Component;
