import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnnhast9d.css';
import '../../css/g/gamqvlbit.css';
import '../../css/t/t1hqvdscu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lnnhast9d"/><path class="gamqvlbit"/><path clip-rule="evenodd" class="t1hqvdscu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-circle-outline"} {...others} />);
}

export default Component;
