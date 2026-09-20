import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu4w_7b6f.css';
import '../../css/e/eov2hibfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu4w_7b6f"/><path class="eov2hibfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cloud-windy-fill"} {...others} />);
}

export default Component;
