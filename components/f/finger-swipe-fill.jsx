import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw6c2jk0b.css';
import '../../css/j/j1j4zhbfy.css';
import '../../css/g/gocw17-6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mw6c2jk0b"/><path class="j1j4zhbfy"/><path class="gocw17-6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:finger-swipe-fill"} {...others} />);
}

export default Component;
