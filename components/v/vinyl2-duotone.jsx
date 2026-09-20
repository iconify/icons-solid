import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3ihwemum.css';
import '../../css/u/u1d2zpbxx.css';
import '../../css/a/abo8drbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m3ihwemum"/><path class="u1d2zpbxx"/><path clip-rule="evenodd" class="abo8drbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:vinyl2-duotone"} {...others} />);
}

export default Component;
