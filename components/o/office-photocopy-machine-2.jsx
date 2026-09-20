import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/maf61obxw.css';
import '../../css/v/vy7iqgbzp.css';
import '../../css/q/qfnil2y-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="maf61obxw"/><path class="vy7iqgbzp"/><path class="qfnil2y-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-photocopy-machine-2"} {...others} />);
}

export default Component;
