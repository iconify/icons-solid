import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd-9drfax.css';
import '../../css/j/j3pesbbke.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xd-9drfax"/><path class="j3pesbbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:luau"} {...others} />);
}

export default Component;
