import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-g5sab0v.css';
import '../../css/l/lafymqbeu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o-g5sab0v"/><path class="lafymqbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:wallet-sharp"} {...others} />);
}

export default Component;
