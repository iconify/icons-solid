import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/oh0xojb7q.css';
import '../../css/h/hgt4vzbwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="oh0xojb7q"/><path class="hgt4vzbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:html-five"} {...others} />);
}

export default Component;
