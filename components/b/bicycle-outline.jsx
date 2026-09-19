import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9ap423kz.css';
import '../../css/v/vwjfqbcke.css';
import '../../css/o/o6u87gbcd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o9ap423kz"/><path class="vwjfqbcke"/><path class="o6u87gbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bicycle-outline"} {...others} />);
}

export default Component;
