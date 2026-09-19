import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o0yhpnb_z.css';
import '../../css/e/ebtfywieo.css';
import '../../css/n/n2r9t-bkq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="o0yhpnb_z"/><path class="ebtfywieo"/><path class="n2r9t-bkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:romper"} {...others} />);
}

export default Component;
