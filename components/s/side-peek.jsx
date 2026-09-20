import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkbgrjdet.css';
import '../../css/l/l9ksdwb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkbgrjdet"/><path clip-rule="evenodd" class="l9ksdwb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:side-peek"} {...others} />);
}

export default Component;
