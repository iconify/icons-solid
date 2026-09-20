import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmki3ubtm.css';
import '../../css/q/qtikdbcvk.css';
import '../../css/s/sfcunzbzv.css';
import '../../css/w/w8i_ob5hf.css';

const viewBox = {"width":500,"height":500};
const content = `<g class="ft5dv1b6b"><path class="lmki3ubtm"/><path class="qtikdbcvk"/><path class="sfcunzbzv"/><path class="w8i_ob5hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:better-auth-light"} {...others} />);
}

export default Component;
