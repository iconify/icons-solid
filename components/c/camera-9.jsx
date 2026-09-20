import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/he3atfblp.css';
import '../../css/w/wzr97ccqs.css';
import '../../css/a/a5q5w8kcg.css';
import '../../css/d/dcy9y1b8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="he3atfblp"/><path class="wzr97ccqs"/><path class="a5q5w8kcg"/><path class="dcy9y1b8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-9"} {...others} />);
}

export default Component;
