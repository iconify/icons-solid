import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6p0h2rje.css';
import '../../css/w/w2ihpg0pg.css';
import '../../css/n/ny37ipbgx.css';
import '../../css/h/hia_zvqyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q6p0h2rje"/><path class="w2ihpg0pg"/><path class="ny37ipbgx"/><path class="hia_zvqyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:crypto-currency-ripple"} {...others} />);
}

export default Component;
