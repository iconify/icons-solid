import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-y_-rgeq.css';
import '../../css/t/tgvgfh09j.css';
import '../../css/t/tvc9qxbfp.css';
import '../../css/o/oj3srnfzw.css';
import '../../css/a/akavj5bvi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q-y_-rgeq"/><g clip-rule="evenodd" class="tgvgfh09j"><path class="tvc9qxbfp"/><path class="oj3srnfzw"/></g><path clip-rule="evenodd" class="akavj5bvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:webcam-off-flat"} {...others} />);
}

export default Component;
