import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmbc7curs.css';
import '../../css/f/fjd69_bck.css';
import '../../css/f/fzpp0cb-g.css';
import '../../css/a/au1zygbdq.css';
import '../../css/y/y-afifx3n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hmbc7curs"/><path class="fjd69_bck"/><path class="fzpp0cb-g"/><path class="au1zygbdq"/><path class="y-afifx3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:neural-network-48"} {...others} />);
}

export default Component;
