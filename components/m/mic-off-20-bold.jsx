import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i24lvpsxg.css';
import '../../css/k/kv_lf4f7r.css';
import '../../css/x/xmfmqwpbn.css';
import '../../css/i/iwgm76bjf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i24lvpsxg"/><path class="kv_lf4f7r"/><path class="xmfmqwpbn"/><path class="iwgm76bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-off-20-bold"} {...others} />);
}

export default Component;
