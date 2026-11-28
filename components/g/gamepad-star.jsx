import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ien1wxbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ien1wxbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:gamepad-star"} {...others} />);
}

export default Component;
