import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1a1zablq.css';
import '../../css/v/vemvzkbny.css';
import '../../css/w/wp-hopvzx.css';
import '../../css/r/rduqfkbgk.css';
import '../../css/g/gw2gv9b3o.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o1a1zablq"/><path class="vemvzkbny"/><path class="wp-hopvzx"/><path class="rduqfkbgk"/><path class="gw2gv9b3o"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:balcony-solar-48"} {...others} />);
}

export default Component;
