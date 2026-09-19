import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4evc5b5u.css';
import '../../css/t/tmkh_-28d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="p4evc5b5u"/><path class="tmkh_-28d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:moon-night"} {...others} />);
}

export default Component;
