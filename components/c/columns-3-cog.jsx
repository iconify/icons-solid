import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voe_oxz9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voe_oxz9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:columns-3-cog"} {...others} />);
}

export default Component;
