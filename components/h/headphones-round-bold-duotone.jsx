import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut4aa6fmk.css';
import '../../css/b/bs6xgtf0q.css';
import '../../css/w/w_p0ksbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ut4aa6fmk"/><path class="bs6xgtf0q"/><path class="w_p0ksbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-bold-duotone"} {...others} />);
}

export default Component;
