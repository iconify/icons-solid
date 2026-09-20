import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv2xbp3ik.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gv2xbp3ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:magsafe-outline"} {...others} />);
}

export default Component;
