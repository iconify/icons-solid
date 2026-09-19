import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq6_68tou.css';
import '../../css/d/drl1v-bmz.css';
import '../../css/a/a8zw4ivqt.css';
import '../../css/i/i911v3rga.css';
import '../../css/i/iew1k9fao.css';
import '../../css/k/khjq496ox.css';
import '../../css/k/kq9fftepb.css';
import '../../css/l/l-542init.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nq6_68tou"/><path class="drl1v-bmz"/><path class="a8zw4ivqt"/><path class="i911v3rga"/><path class="iew1k9fao"/><path class="khjq496ox"/><path class="kq9fftepb"/><path class="l-542init"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pot-of-food"} {...others} />);
}

export default Component;
