import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6aqcxs5i.css';
import '../../css/r/rql9u2b8f.css';
import '../../css/a/acukp54cc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k6aqcxs5i"/><path class="rql9u2b8f"/><path class="acukp54cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-format-bold-duotone"} {...others} />);
}

export default Component;
