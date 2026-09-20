import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihb7gccby.css';
import '../../css/z/zau8vgbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihb7gccby"/><path class="zau8vgbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:power-supply-plug"} {...others} />);
}

export default Component;
