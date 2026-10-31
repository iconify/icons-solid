import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dotbkuh7v.css';
import '../../css/c/ct5fwxbqh.css';
import '../../css/p/popa48f_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dotbkuh7v wm-shadow"/><path class="ct5fwxbqh wm-shadow"/><path class="popa48f_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sort"} {...others} />);
}

export default Component;
