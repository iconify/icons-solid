import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae_guezvh.css';
import '../../css/x/xkpdq495a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae_guezvh"/><path class="xkpdq495a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-lol"} {...others} />);
}

export default Component;
