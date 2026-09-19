import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh6v8bttb.css';
import '../../css/f/fhpolubmh.css';
import '../../css/f/fjazzcciw.css';
import '../../css/q/qrnpo-b3z.css';
import '../../css/h/hwdeo7b7m.css';
import '../../css/w/wd65-vb_d.css';
import '../../css/x/xcydl_t_s.css';
import '../../css/n/n4kjiwyen.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eh6v8bttb"/><path class="fhpolubmh"/><path class="fjazzcciw"/><path class="qrnpo-b3z"/><path class="hwdeo7b7m"/><path class="wd65-vb_d"/><path class="xcydl_t_s"/><path class="n4kjiwyen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cowboy-hat-face"} {...others} />);
}

export default Component;
