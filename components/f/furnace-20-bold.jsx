import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzijosb1g.css';
import '../../css/h/hg3-fcc3e.css';
import '../../css/x/xbitz5bna.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rzijosb1g"/><path class="hg3-fcc3e"/><path class="xbitz5bna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:furnace-20-bold"} {...others} />);
}

export default Component;
