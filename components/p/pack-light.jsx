import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kylfzebuf.css';
import '../../css/i/impgh8bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kylfzebuf"/><path class="impgh8bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pack-light"} {...others} />);
}

export default Component;
