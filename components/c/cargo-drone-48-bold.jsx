import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgcx0hboz.css';
import '../../css/n/n4awmqm9i.css';
import '../../css/o/owsgh5_sx.css';
import '../../css/v/vlkisqbpc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bgcx0hboz"/><path class="n4awmqm9i"/><path class="owsgh5_sx"/><path class="vlkisqbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-drone-48-bold"} {...others} />);
}

export default Component;
