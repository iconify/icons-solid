import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjuhq0fek.css';
import '../../css/j/jj8onj9ce.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/o/ob2ia6vxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bjuhq0fek"/><path class="jj8onj9ce"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="ob2ia6vxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money-out"} {...others} />);
}

export default Component;
