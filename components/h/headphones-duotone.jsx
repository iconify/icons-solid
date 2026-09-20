import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4ciipbpv.css';
import '../../css/j/jsm8ux5rh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4ciipbpv"/><path class="jsm8ux5rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:headphones-duotone"} {...others} />);
}

export default Component;
