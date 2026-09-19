import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz5v9-vqq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mz5v9-vqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:flaming-arrow"} {...others} />);
}

export default Component;
