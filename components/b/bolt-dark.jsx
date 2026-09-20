import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/gdj-7nb0w.css';
import '../../css/t/tbhf0lycc.css';
import '../../css/w/wei4ynt1z.css';

const viewBox = {"width":160,"height":68.7,"top":45.65};
const content = `<g class="n1mjunbsu"><path class="gdj-7nb0w"/><path class="tbhf0lycc"/><path class="wei4ynt1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bolt-dark"} {...others} />);
}

export default Component;
