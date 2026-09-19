import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcamlfw4p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pcamlfw4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:soul-vessel"} {...others} />);
}

export default Component;
