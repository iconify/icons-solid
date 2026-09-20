import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-wg9bz4o.css';
import '../../css/s/s1d8djbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-wg9bz4o"/><path clip-rule="evenodd" class="s1d8djbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:blessing-line"} {...others} />);
}

export default Component;
