import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9ewr3kwo.css';
import '../../css/w/w0fg7jb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p9ewr3kwo"/><path class="w0fg7jb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:corner-down-left"} {...others} />);
}

export default Component;
