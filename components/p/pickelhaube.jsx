import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0h8_ovwy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e0h8_ovwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pickelhaube"} {...others} />);
}

export default Component;
