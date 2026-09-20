import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j74hjfewl.css';
import '../../css/d/drayhlbvh.css';
import '../../css/i/i4ls8l-_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j74hjfewl"/><path class="drayhlbvh"/><path class="i4ls8l-_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:invoice-duotone"} {...others} />);
}

export default Component;
