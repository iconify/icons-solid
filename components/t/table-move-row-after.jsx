import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfk9sbw9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mfk9sbw9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:table-move-row-after"} {...others} />);
}

export default Component;
