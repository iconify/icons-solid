import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkesrtb_l.css';
import '../../css/i/im-_dl6ti.css';
import '../../css/w/wo35n__ww.css';
import '../../css/w/wykp-20vj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mkesrtb_l"/><path class="im-_dl6ti"/><path class="wo35n__ww"/><path class="wykp-20vj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobile-phone-smartphone"} {...others} />);
}

export default Component;
