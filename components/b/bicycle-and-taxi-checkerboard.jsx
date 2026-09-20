import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvcv351wn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pvcv351wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-and-taxi-checkerboard"} {...others} />);
}

export default Component;
