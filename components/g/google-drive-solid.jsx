import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwsc7mbwv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lwsc7mbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:google-drive-solid"} {...others} />);
}

export default Component;
