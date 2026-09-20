import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv6k1030q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv6k1030q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyboard-asterisk-1"} {...others} />);
}

export default Component;
