import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h38u9um-k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h38u9um-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:google-streetview-outline"} {...others} />);
}

export default Component;
