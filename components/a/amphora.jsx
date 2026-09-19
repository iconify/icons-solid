import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-zvcgbkm.css';
import '../../css/v/vi7wg-b-m.css';
import '../../css/n/n8fm_nedr.css';
import '../../css/g/gjv40ebzb.css';
import '../../css/y/ybual88ux.css';
import '../../css/q/qd1d_lh6h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="t-zvcgbkm"/><path class="vi7wg-b-m"/><path class="n8fm_nedr"/><path class="gjv40ebzb"/><path class="ybual88ux"/><path class="qd1d_lh6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:amphora"} {...others} />);
}

export default Component;
