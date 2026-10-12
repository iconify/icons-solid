import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqt8x36bs.css';
import '../../css/n/n7c3xab-f.css';
import '../../css/s/s2m1i3bel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqt8x36bs"/><path class="n7c3xab-f"/><path class="s2m1i3bel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-chart-pie-filled"} {...others} />);
}

export default Component;
