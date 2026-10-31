import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wsqq5lb5n.css';
import '../../css/z/zrd_a8b0h.css';
import '../../css/p/p-9u1qz1p.css';
import '../../css/j/jkw54tb-v.css';
import '../../css/a/akrwn6bek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wsqq5lb5n"/><path class="wm-shadow zrd_a8b0h"/><path class="p-9u1qz1p"/><path class="jkw54tb-v"/><path class="akrwn6bek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hourglass"} {...others} />);
}

export default Component;
