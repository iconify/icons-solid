import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3hv07b8e.css';
import '../../css/o/owxry0bls.css';
import '../../css/k/ktqbxi-uc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i3hv07b8e"/><path class="owxry0bls"/><path class="ktqbxi-uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-more"} {...others} />);
}

export default Component;
