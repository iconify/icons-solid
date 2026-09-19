import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9dxnnbae.css';
import '../../css/s/spzrtb9gd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x9dxnnbae"/><path class="spzrtb9gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shuffle-sharp"} {...others} />);
}

export default Component;
