import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha86pmbhz.css';
import '../../css/e/enwgtzkop.css';
import '../../css/j/jxlfcwbvb.css';
import '../../css/i/ic7wmfzxq.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ha86pmbhz"/><path class="enwgtzkop"/><path class="jxlfcwbvb"/><path class="ic7wmfzxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:saba"} {...others} />);
}

export default Component;
