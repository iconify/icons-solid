import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/xt9ylgxbv.css';
import '../../css/t/tnqrs3bck.css';
import '../../css/q/qtktxacxl.css';
import '../../css/s/sfy91pb3e.css';
import '../../css/h/hli2s3b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="xt9ylgxbv"/><path class="tnqrs3bck"/><path class="qtktxacxl"/><path class="sfy91pb3e"/><path class="hli2s3b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-line-duotone"} {...others} />);
}

export default Component;
