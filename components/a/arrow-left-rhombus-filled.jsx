import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgw_fbc9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgw_fbc9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-left-rhombus-filled"} {...others} />);
}

export default Component;
