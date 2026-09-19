import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq8k_v7yc.css';
import '../../css/r/relvolb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xq8k_v7yc"/><path class="relvolb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-archive"} {...others} />);
}

export default Component;
