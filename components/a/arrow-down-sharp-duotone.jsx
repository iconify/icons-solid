import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg-d9bb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tg-d9bb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-sharp-duotone"} {...others} />);
}

export default Component;
