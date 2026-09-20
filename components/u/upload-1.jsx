import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s58i6g_jw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s58i6g_jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:upload-1"} {...others} />);
}

export default Component;
