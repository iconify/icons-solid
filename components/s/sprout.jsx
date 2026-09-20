import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2bqlemma.css';
import '../../css/i/iotpzu8ya.css';
import '../../css/y/yj3rmtyru.css';
import '../../css/f/f1sputb4r.css';
import '../../css/p/pjaqvf5bu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e2bqlemma"/><path class="iotpzu8ya"/><path class="yj3rmtyru"/><path class="f1sputb4r"/><path class="pjaqvf5bu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sprout"} {...others} />);
}

export default Component;
