import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myggo7b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="myggo7b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-up-right-circle"} {...others} />);
}

export default Component;
