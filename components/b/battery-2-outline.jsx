import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkmy9uvwt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pkmy9uvwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:battery-2-outline"} {...others} />);
}

export default Component;
