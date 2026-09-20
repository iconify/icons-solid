import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/my185mb8y.css';
import '../../css/t/ta-_lpb0q.css';
import '../../css/x/x4ojzvb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="my185mb8y"/><path class="ta-_lpb0q"/><path class="x4ojzvb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:pickup-truck"} {...others} />);
}

export default Component;
