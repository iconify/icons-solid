import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkm0taczv.css';
import '../../css/x/xm74jkbli.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gkm0taczv"/><path class="xm74jkbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-center-left-16"} {...others} />);
}

export default Component;
