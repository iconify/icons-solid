import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hwe5zpb6z.css';
import '../../css/a/acx9zcfzm.css';
import '../../css/z/z62v8yb4a.css';
import '../../css/r/r4l28n4wf.css';
import '../../css/l/l-0kl3bwp.css';
import '../../css/s/spcrfc8qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hwe5zpb6z wm-shadow"/><path class="acx9zcfzm"/><path class="z62v8yb4a"/><path class="r4l28n4wf"/><path class="l-0kl3bwp wm-shine"/><path class="spcrfc8qp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:keyboard"} {...others} />);
}

export default Component;
