import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwl1g1bld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwl1g1bld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divider-small-duotone-round"} {...others} />);
}

export default Component;
