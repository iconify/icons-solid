import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0m3lcb0w.css';
import '../../css/o/on5ils5mm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0m3lcb0w"/><path class="on5ils5mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:invoice"} {...others} />);
}

export default Component;
