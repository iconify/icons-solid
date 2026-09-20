import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrsuk5b6z.css';
import '../../css/s/s_3yk55iu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrsuk5b6z"/><path class="s_3yk55iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bling-line"} {...others} />);
}

export default Component;
