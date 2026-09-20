import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/aq1am_bjl.css';
import '../../css/s/s9xr-tl4r.css';
import '../../css/z/zz_7ib29k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="aq1am_bjl"/><path class="s9xr-tl4r"/><path class="zz_7ib29k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-setting"} {...others} />);
}

export default Component;
