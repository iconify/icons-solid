import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/acgnrobcy.css';
import '../../css/x/x15bctgju.css';
import '../../css/z/zswyk9z4j.css';
import '../../css/h/hjt1n9b2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="acgnrobcy"/><path class="x15bctgju"/><path class="zswyk9z4j"/><path class="hjt1n9b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:headset"} {...others} />);
}

export default Component;
