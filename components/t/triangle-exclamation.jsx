import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rib8vw59i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rib8vw59i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:triangle-exclamation"} {...others} />);
}

export default Component;
