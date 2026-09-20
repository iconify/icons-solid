import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb5txlixd.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="xb5txlixd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:google-solid"} {...others} />);
}

export default Component;
