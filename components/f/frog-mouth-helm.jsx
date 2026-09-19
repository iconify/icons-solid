import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehgrw2b_j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ehgrw2b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:frog-mouth-helm"} {...others} />);
}

export default Component;
