import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv14xiw-u.css';
import '../../css/z/zol642wmt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uv14xiw-u"/><path clip-rule="evenodd" class="zol642wmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
