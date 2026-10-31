import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtdytvbpv.css';
import '../../css/e/e7pbvn6ja.css';
import '../../css/v/vvjhkvdzn.css';
import '../../css/r/r96aovb-i.css';
import '../../css/o/o1e6b-b6r.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wtdytvbpv"/><path class="e7pbvn6ja"/><path class="vvjhkvdzn"/><path class="r96aovb-i"/><path class="o1e6b-b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:seychelles"} {...others} />);
}

export default Component;
