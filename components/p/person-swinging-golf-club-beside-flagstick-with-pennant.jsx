import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q14_dk0ar.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q14_dk0ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-swinging-golf-club-beside-flagstick-with-pennant"} {...others} />);
}

export default Component;
