import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmofqyjxe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xmofqyjxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-bar-horizontal-stacked"} {...others} />);
}

export default Component;
