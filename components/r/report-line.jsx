import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0yw_i1yc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0yw_i1yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:report-line"} {...others} />);
}

export default Component;
