import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqe5t7h8j.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lux-ocb0v.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/n/n1cmwi32g.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGhOKll5Tg" class="qqe5t7h8j"/></defs><g class="ft5dv1b6b"><path class="lux-ocb0v"/><use href="#SVGhOKll5Tg"/><use href="#SVGhOKll5Tg" class="av3m8fbrw"/><path class="n1cmwi32g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:save"} {...others} />);
}

export default Component;
