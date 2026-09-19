import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_6rmtujx.css';
import '../../css/x/xmy0diffs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_6rmtujx"/><path class="xmy0diffs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ipod"} {...others} />);
}

export default Component;
