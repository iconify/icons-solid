import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8ywu5bta.css';
import '../../css/s/s776ws_jb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8ywu5bta"/><path clip-rule="evenodd" class="s776ws_jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:bus-fill"} {...others} />);
}

export default Component;
