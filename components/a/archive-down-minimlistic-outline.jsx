import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydol6mbyu.css';
import '../../css/r/r8h9qdcac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ydol6mbyu"/><path clip-rule="evenodd" class="r8h9qdcac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-minimlistic-outline"} {...others} />);
}

export default Component;
