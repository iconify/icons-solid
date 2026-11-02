import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb_xsvb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hb_xsvb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-axis-3d-fill"} {...others} />);
}

export default Component;
