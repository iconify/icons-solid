import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8kn_3bny.css';
import '../../css/f/fn8q6tmlk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8kn_3bny"/><path class="fn8q6tmlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:desktop-light"} {...others} />);
}

export default Component;
