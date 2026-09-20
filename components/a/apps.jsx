import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w379rftri.css';
import '../../css/t/tjwx6vb0l.css';
import '../../css/o/o0rkvxbie.css';
import '../../css/q/qglu0sgat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="w379rftri"/><path class="tjwx6vb0l"/><rect class="o0rkvxbie"/><rect class="qglu0sgat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:apps"} {...others} />);
}

export default Component;
