import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbt64hbhh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rbt64hbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:folder-open-sharp"} {...others} />);
}

export default Component;
