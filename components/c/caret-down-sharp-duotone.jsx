import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m63u-cblq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m63u-cblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-down-sharp-duotone"} {...others} />);
}

export default Component;
