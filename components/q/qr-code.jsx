import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/br-cd-bbd.css';
import '../../css/q/qfbt3bcyu.css';
import '../../css/h/hfx4ozb9p.css';
import '../../css/u/ui6zico0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><rect class="br-cd-bbd"/><rect class="qfbt3bcyu"/><rect class="hfx4ozb9p"/><path class="ui6zico0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:qr-code"} {...others} />);
}

export default Component;
