import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4hvibczh.css';
import '../../css/p/p-3uqobhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4hvibczh"/><path class="p-3uqobhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-bookmarks"} {...others} />);
}

export default Component;
