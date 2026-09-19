import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b0xhw3gtc.css';
import '../../css/f/foyc2nb7z.css';
import '../../css/b/btfw9mbtg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b0xhw3gtc"/><path class="foyc2nb7z"/><path class="btfw9mbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:proportional-scaling"} {...others} />);
}

export default Component;
