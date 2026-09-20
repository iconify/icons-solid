import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suz-ffp0e.css';
import '../../css/o/o_0l1hoku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="suz-ffp0e"/><path clip-rule="evenodd" class="o_0l1hoku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-check-filled"} {...others} />);
}

export default Component;
