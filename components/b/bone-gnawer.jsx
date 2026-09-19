import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-ddp93cp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o-ddp93cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bone-gnawer"} {...others} />);
}

export default Component;
