import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh9e62b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh9e62b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:shutter-alt"} {...others} />);
}

export default Component;
