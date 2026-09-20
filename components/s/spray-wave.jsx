import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/my15a3bbi.css';
import '../../css/f/flmf5xgib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="my15a3bbi"/><path class="flmf5xgib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:spray-wave"} {...others} />);
}

export default Component;
