import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb5uc22li.css';
import '../../css/g/glsw0x0fa.css';
import '../../css/v/vu-c712lo.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/k/k3ano_pcw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fb5uc22li"/><path class="glsw0x0fa"/><path class="vu-c712lo"/><path class="xjfc-xbtr"/><path class="k3ano_pcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-surprised"} {...others} />);
}

export default Component;
