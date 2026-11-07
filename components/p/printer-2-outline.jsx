import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myod-k65i.css';
import '../../css/i/ihkre-bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="myod-k65i"/><path class="ihkre-bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-2-outline"} {...others} />);
}

export default Component;
