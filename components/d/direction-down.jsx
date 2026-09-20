import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze5oi5l2j.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="ze5oi5l2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:direction-down"} {...others} />);
}

export default Component;
