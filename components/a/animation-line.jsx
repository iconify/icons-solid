import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbdu-tbiz.css';
import '../../css/v/vtxmsw_ac.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="xbdu-tbiz"/><path class="vtxmsw_ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:animation-line"} {...others} />);
}

export default Component;
