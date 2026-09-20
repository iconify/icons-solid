import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-clg1bhh.css';
import '../../css/n/nsmo7pjfo.css';
import '../../css/y/yjxmwp68m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q-clg1bhh"/><path class="nsmo7pjfo"/><path class="yjxmwp68m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:move-left"} {...others} />);
}

export default Component;
