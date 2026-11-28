import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxf9zc3us.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxf9zc3us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:car-off-solid"} {...others} />);
}

export default Component;
