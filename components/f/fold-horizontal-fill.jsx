import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxl11ypsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxl11ypsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fold-horizontal-fill"} {...others} />);
}

export default Component;
