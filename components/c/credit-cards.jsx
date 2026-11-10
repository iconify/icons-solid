import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz2cjabvp.css';
import '../../css/x/x1m55k_fu.css';
import '../../css/e/ei6ze2bhw.css';
import '../../css/z/z28viubrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dz2cjabvp"/><path class="x1m55k_fu"/><path class="ei6ze2bhw"/><path class="z28viubrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-cards"} {...others} />);
}

export default Component;
