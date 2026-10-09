import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5hh3ac5g.css';
import '../../css/q/q761jsrye.css';
import '../../css/g/gpknbotbu.css';
import '../../css/c/ceg2-nwwc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m5hh3ac5g"/><path class="q761jsrye"/><path class="gpknbotbu"/><path class="ceg2-nwwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-recycle-20"} {...others} />);
}

export default Component;
