import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i0p67vb5m.css';
import '../../css/q/qi6l5r2qn.css';
import '../../css/e/en8mcvqby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="i0p67vb5m"/><path class="qi6l5r2qn"/><path class="en8mcvqby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:coin-hand-1"} {...others} />);
}

export default Component;
