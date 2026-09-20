import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xp7ay8odm.css';
import '../../css/a/ancvxhafp.css';
import '../../css/g/gsogu6lek.css';
import '../../css/e/etrs2ib-d.css';
import '../../css/f/fphitabdi.css';
import '../../css/u/u46xrjb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="xp7ay8odm"/><path class="ancvxhafp"/><path class="gsogu6lek"/><path class="etrs2ib-d"/></g><g class="mc2zb0bvp"><path class="xp7ay8odm"/><path class="ancvxhafp"/></g><path class="fphitabdi"/><path class="u46xrjb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-bold-duotone"} {...others} />);
}

export default Component;
