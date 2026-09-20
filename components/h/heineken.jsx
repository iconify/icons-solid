import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufezoob8l.css';
import '../../css/j/jj0y18b7z.css';
import '../../css/i/i_ualyltq.css';
import '../../css/c/c74u57gvz.css';
import '../../css/v/vyo_pnbuu.css';
import '../../css/q/q_7wvl0hv.css';

const viewBox = {"width":839.06,"height":439.37};
const content = `<g class="ufezoob8l"><path class="jj0y18b7z"/><ellipse class="i_ualyltq"/><path class="c74u57gvz"/></g><path class="vyo_pnbuu"/><path class="q_7wvl0hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:heineken"} {...others} />);
}

export default Component;
