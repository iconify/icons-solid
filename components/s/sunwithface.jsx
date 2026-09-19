import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guaobubus.css';
import '../../css/i/i4xsl43pg.css';
import '../../css/y/y0aa2db-h.css';
import '../../css/q/q811zrblc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="guaobubus"/><circle class="i4xsl43pg"/><path class="y0aa2db-h"/><path class="q811zrblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunwithface"} {...others} />);
}

export default Component;
