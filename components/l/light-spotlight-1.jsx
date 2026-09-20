import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hajiifygo.css';
import '../../css/a/a185onbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hajiifygo"/><path class="a185onbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:light-spotlight-1"} {...others} />);
}

export default Component;
