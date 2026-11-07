import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw0ke5bhk.css';
import '../../css/f/f8-fppcwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bw0ke5bhk"/><path class="f8-fppcwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:repeat-one-bold-duotone"} {...others} />);
}

export default Component;
