import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tswl3pbjq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tswl3pbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:grab-horizontal"} {...others} />);
}

export default Component;
