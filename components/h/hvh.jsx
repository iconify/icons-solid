import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l62c7xi6z.css';
import '../../css/d/dc3cn71jk.css';
import '../../css/m/mphw5tchn.css';
import '../../css/f/fznprzbbk.css';
import '../../css/q/q_j05dn5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l62c7xi6z"/><path class="dc3cn71jk"/><path clip-rule="evenodd" class="mphw5tchn"/><path class="fznprzbbk"/><path class="q_j05dn5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hvh"} {...others} />);
}

export default Component;
