import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7laoac1b.css';
import '../../css/k/kpr370qpo.css';
import '../../css/r/rxv-kk84s.css';
import '../../css/u/u8rtwkb4d.css';
import '../../css/k/kqu_s2b8w.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="k7laoac1b"/><path class="kpr370qpo"/><path class="rxv-kk84s"/><path class="u8rtwkb4d"/><path class="kqu_s2b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:history"} {...others} />);
}

export default Component;
