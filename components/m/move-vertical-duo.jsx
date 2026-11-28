import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xogt69b4f.css';
import '../../css/z/zonae0b0d.css';
import '../../css/b/bae79bbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xogt69b4f"/><path class="zonae0b0d"/><path class="bae79bbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:move-vertical-duo"} {...others} />);
}

export default Component;
