import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjah9mb2h.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="pjah9mb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:filter"} {...others} />);
}

export default Component;
