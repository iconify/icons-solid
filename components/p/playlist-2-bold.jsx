import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb-pm1l6d.css';
import '../../css/e/ex199jb-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yb-pm1l6d"/><path clip-rule="evenodd" class="ex199jb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-2-bold"} {...others} />);
}

export default Component;
