import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc5uqjbvk.css';
import '../../css/k/kde8vp2lw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc5uqjbvk"/><path class="kde8vp2lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:music-clef"} {...others} />);
}

export default Component;
