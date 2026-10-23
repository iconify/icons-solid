import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auseovn_l.css';
import '../../css/l/ld2_u3-wt.css';
import '../../css/t/tld6labme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="auseovn_l"/><path class="ld2_u3-wt"/><path class="tld6labme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lemon"} {...others} />);
}

export default Component;
