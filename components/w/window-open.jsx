import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx1fsfbvz.css';
import '../../css/k/kj930pbau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx1fsfbvz"/><path class="kj930pbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:window-open"} {...others} />);
}

export default Component;
