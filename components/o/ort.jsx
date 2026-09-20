import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt0k57bfd.css';
import '../../css/s/si1143bzw.css';
import '../../css/v/vs71ghb9p.css';
import '../../css/o/oud3bnr7u.css';
import '../../css/i/ijr8j1bui.css';
import '../../css/n/nn3fxib9y.css';
import '../../css/o/oi3gcbbul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rt0k57bfd"/><path class="si1143bzw"/><path class="vs71ghb9p"/><path clip-rule="evenodd" class="oud3bnr7u"/><path class="ijr8j1bui"/><path class="nn3fxib9y"/><path clip-rule="evenodd" class="oi3gcbbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ort"} {...others} />);
}

export default Component;
