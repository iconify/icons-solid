import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4dwfcxlu.css';
import '../../css/n/nn6o3jcjm.css';
import '../../css/p/p12jg8bju.css';
import '../../css/x/x-6lrwbac.css';
import '../../css/i/iw5ypyb5p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o4dwfcxlu"/><path class="nn6o3jcjm"/><path class="p12jg8bju"/><path class="x-6lrwbac"/><path class="iw5ypyb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-network-spark"} {...others} />);
}

export default Component;
