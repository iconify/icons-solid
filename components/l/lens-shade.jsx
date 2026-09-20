import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqzczqbtc.css';
import '../../css/o/o7jrp6bdc.css';
import '../../css/k/k4twuh3gg.css';
import '../../css/z/zpicldb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nqzczqbtc"/><path class="o7jrp6bdc"/><path class="k4twuh3gg"/><path class="zpicldb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:lens-shade"} {...others} />);
}

export default Component;
