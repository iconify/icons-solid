import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hji8f9b7e.css';
import '../../css/b/b__7uybkz.css';
import '../../css/m/mloc2fb5m.css';
import '../../css/c/c-ehasb9k.css';
import '../../css/n/na8g2hebh.css';
import '../../css/x/xk_kpac3m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hji8f9b7e"/><path class="b__7uybkz"/><path clip-rule="evenodd" class="mloc2fb5m"/><path class="c-ehasb9k"/><path class="na8g2hebh"/><path class="xk_kpac3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:building-1"} {...others} />);
}

export default Component;
