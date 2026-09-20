import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgmgfacjn.css';
import '../../css/i/ip95smfdk.css';
import '../../css/h/h02m9fm5b.css';
import '../../css/s/szhd4pbou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kgmgfacjn"/><path class="ip95smfdk"/><path class="h02m9fm5b"/><path class="szhd4pbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tower-clock"} {...others} />);
}

export default Component;
