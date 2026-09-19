import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2nej9lxq.css';
import '../../css/q/qlmknyb9f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b2nej9lxq"/><path class="qlmknyb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-cursor-open"} {...others} />);
}

export default Component;
