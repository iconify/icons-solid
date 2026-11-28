import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wly1u2umf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wly1u2umf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:fridge-check"} {...others} />);
}

export default Component;
