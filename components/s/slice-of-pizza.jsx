import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbxxnv_xu.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xbxxnv_xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:slice-of-pizza"} {...others} />);
}

export default Component;
