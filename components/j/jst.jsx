import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltz0s7b4l.css';
import '../../css/x/x15y2eb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltz0s7b4l"/><path class="x15y2eb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:jst"} {...others} />);
}

export default Component;
