import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1c-ynbdd.css';
import '../../css/u/um7xp58ns.css';
import '../../css/i/i_y_cqlwr.css';
import '../../css/n/nvb-2kouc.css';
import '../../css/l/ltvkdbw3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w1c-ynbdd"/><path class="um7xp58ns"/><path class="i_y_cqlwr"/><rect transform="rotate(-90 13.7 21.4)" class="nvb-2kouc"/><path class="ltvkdbw3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-phone"} {...others} />);
}

export default Component;
