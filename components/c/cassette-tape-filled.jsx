import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqau0ibzp.css';
import '../../css/k/kpwe2lb7m.css';
import '../../css/d/djiwjacqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqau0ibzp"/><path clip-rule="evenodd" class="kpwe2lb7m"/><path class="djiwjacqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cassette-tape-filled"} {...others} />);
}

export default Component;
