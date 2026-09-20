import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztp-9fb2o.css';
import '../../css/u/ureme7j-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ztp-9fb2o"/><path class="ureme7j-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:time-hourglass-triangle"} {...others} />);
}

export default Component;
