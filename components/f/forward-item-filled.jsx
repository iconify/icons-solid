import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp7dm_-5g.css';
import '../../css/j/je8pdhb8a.css';
import '../../css/t/tt1dhvb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vp7dm_-5g"/><path class="je8pdhb8a"/><path class="tt1dhvb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forward-item-filled"} {...others} />);
}

export default Component;
