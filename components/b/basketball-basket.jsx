import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sddk6fr6n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sddk6fr6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:basketball-basket"} {...others} />);
}

export default Component;
