import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4e9tjb-p.css';
import '../../css/r/r33vs8zyw.css';
import '../../css/w/w7guu_23n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c4e9tjb-p"/><path clip-rule="evenodd" class="r33vs8zyw"/><path class="w7guu_23n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sfm"} {...others} />);
}

export default Component;
