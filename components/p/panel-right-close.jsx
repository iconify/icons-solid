import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpjppob8b.css';
import '../../css/t/te55e6u-b.css';
import '../../css/a/ad95tnbdq.css';
import '../../css/w/wtjyfvb9r.css';
import '../../css/z/zvuuvubyd.css';
import '../../css/a/algqhl93w.css';
import '../../css/i/i8al0jbjt.css';
import '../../css/g/g9cve6s7p.css';
import '../../css/k/kpgasemoe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpjppob8b wm-shadow"/><path class="te55e6u-b wm-k"/><path class="ad95tnbdq wm-k"/><path class="wm-k wtjyfvb9r"/><path class="wm-k zvuuvubyd"/><path class="algqhl93w wm-k"/><path class="i8al0jbjt wm-shine"/><path class="g9cve6s7p wm-a"/><path class="kpgasemoe wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:panel-right-close"} {...others} />);
}

export default Component;
