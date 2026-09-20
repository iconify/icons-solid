import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgiz70bcu.css';
import '../../css/e/eq9l84oyb.css';
import '../../css/g/gzf04abkt.css';
import '../../css/k/kyiqf-ijv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tgiz70bcu"/><path class="eq9l84oyb"/><path class="gzf04abkt"/><path class="kyiqf-ijv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:macro-mode"} {...others} />);
}

export default Component;
