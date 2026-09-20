import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na7vfmlon.css';
import '../../css/a/amc7in5gm.css';
import '../../css/q/qvnwnlb8q.css';
import '../../css/t/tttm-m-7a.css';
import '../../css/k/kfisquj5r.css';
import '../../css/g/g8g6mm3nw.css';
import '../../css/o/ompgixb0r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="na7vfmlon"/><path clip-rule="evenodd" class="amc7in5gm"/><path class="qvnwnlb8q"/><path clip-rule="evenodd" class="tttm-m-7a"/><path class="kfisquj5r"/><path clip-rule="evenodd" class="g8g6mm3nw"/><path class="ompgixb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:polaroid-four"} {...others} />);
}

export default Component;
