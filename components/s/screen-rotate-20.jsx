import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5r654krd.css';
import '../../css/r/rzv19ackg.css';
import '../../css/k/kiwq7bbdz.css';
import '../../css/l/lo37u5bfu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f5r654krd"/><path class="rzv19ackg"/><path class="kiwq7bbdz"/><path class="lo37u5bfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-rotate-20"} {...others} />);
}

export default Component;
