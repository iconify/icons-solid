import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bntco1b6w.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="bntco1b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:heart-white-suit-circled"} {...others} />);
}

export default Component;
