import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii0_g0bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ii0_g0bjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:flask-conical"} {...others} />);
}

export default Component;
