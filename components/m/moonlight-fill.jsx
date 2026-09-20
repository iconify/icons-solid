import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjibmefbt.css';
import '../../css/r/rutj1thmt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjibmefbt"/><path class="rutj1thmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moonlight-fill"} {...others} />);
}

export default Component;
