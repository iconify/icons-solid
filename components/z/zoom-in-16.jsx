import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwxfhhz9b.css';
import '../../css/p/pxcxtbcog.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mwxfhhz9b"/><path class="pxcxtbcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:zoom-in-16"} {...others} />);
}

export default Component;
